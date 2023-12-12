import { useEffect } from "react";
import { useRouter } from "next/router";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
import PostCard from "@/app/components/posts";
import "../app/globals.css";

export default function UserProfile({ isLoggedIn }) {
    const router = useRouter();
    // const db = getFirestore();

    // const cityRef = db.collection('cities').doc('SF');
    // const doc = await cityRef.get();
    // if (!doc.exists) {
    // console.log('No such document!');
    // } else {
    // console.log('Document data:', doc.data());
// }

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    return(
        <>
            <main>
                <h1>Check you friend's day!</h1>
                <PostCard />
                <p>hello</p>
            </main>
        </>
    );
}