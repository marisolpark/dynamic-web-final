import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, unploadBytes, uploadBytes } from "firebase/storage";
import CreatePostForm from "@/app/components/CreatePostForm";
import "../app/globals.css";


export default function CreatePost({ isLoggedIn, userInformation }) {
    const router = useRouter();

    useEffect(() => {
        if (! isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    const createPostFunction = useCallback(async (e, imageUpload) => {
        e.preventDefault();
        const storage = getStorage();
        const db = getFirestore();
        const postContent = e.currentTarget.postContent.value;
        const usedId = userInformation.uid
        let imageURL;
        
        const storageRef = ref(storage, imageUpload?.name);
        await uploadBytes(storageRef, imageUpload)
        .then(async (snapshot) => {
            await getDownloadURL(snapshot.ref)
            .then((url) => {
                imageURL = url;
            });
        })
        .catch((error) => {
            console.warn(error);
        })

        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            usedId: usedId,
            imageURL:imageURL || "This is not an image",
          });

          if(data) {
            router.push("/");
          }
    }, [addDoc, collection, getFirestore, router, userInformation]);

    return(
        <>
            <main>
                <h1>Create Post</h1>
                <CreatePostForm createPostFunction={createPostFunction} />
            </main>
        </>
    );
}