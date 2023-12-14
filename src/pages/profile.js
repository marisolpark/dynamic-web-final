import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { collection, getFirestore, query, doc, getDocs, where } from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard";
import MyDays from "@/app/components/MyDays";
import styles from "./pages.module.css";
import "../app/globals.css"

export default function UserProfile({ isLoggedIn, userInformation }) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
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

        async function getUserPosts() {
            let posts = [];
            const db = getFirestore();
            const q = query(
                collection(db, "posts"),
                where("usedId", "==", userInformation?.uid)
            );
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
            querySnapshot.forEach((post) =>{
                posts.push({id: post.id, ...post.data()})
            });
            setUserPosts(posts);
        }

        if (userInformation) {
            getUser();
            getUserPosts();
        }
    }, [userInformation]);

    console.log(userPosts)

    return(
        <>
            <main>
                <h1 className={styles.userProfileTitle}>Check Out Your Daily Entries!</h1>
                <UserProfileCard user={user} emailinfo={userInformation}/>
                <div className={styles.feedPostsContainter}>
                    {userPosts.map((post, i) => (
                        <MyDays userPost={post} key={i} />
                    ))}
                </div>
            </main>
        </>
    );
}