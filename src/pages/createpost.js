import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, unploadBytes, uploadBytes } from "firebase/storage";
import CreatePostForm from "@/app/components/CreatePostForm";
import "../app/globals.css";


export default function CreatePost({ isLoggedIn, userInformation }) {
    const router = useRouter();
    const [user, setUser] = useState({}); 
    useEffect(() => {
        if (! isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    useEffect(() => {
        async function getUser() {
            let user = {};
            const db = getFirestore();
            const q = query(
                collection(db, "users"),
                where("userId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
                user = doc.data();
            });
            setUser(user);
        }

        if (userInformation) {
            getUser();
        }
    }, [userInformation]);

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
            username: user.username
          });

          if(data) {
            router.push("/");
          }
    }, [addDoc, collection, getFirestore, router, userInformation, user]);

    return(
        <>
            <main>
                <h1>Create Post</h1>
                <CreatePostForm createPostFunction={createPostFunction} />
            </main>
        </>
    );
}