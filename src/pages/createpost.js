import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CreatePostForm from "@/app/components/CreatePostForm";
import "../app/globals.css";


export default function CreatePost({ isLoggedIn, userInformation }) {
    const router = useRouter();

    useEffect(() => {
        if (! isLoggedIn) router.push("/");
    }, [isLoggedIn]);

    const createPostFunction = useCallback(async (e) => {
        e.preventDefault();
        const postContent = e.currentTarget.postContent.value;
        const usedId = userInformation.uid
        const db = getFirestore();

        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            usedId: usedId,
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