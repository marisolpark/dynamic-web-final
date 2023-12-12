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
        if (userInformation) {
            getUser();
        }
    }, [userInformation]);

    return(
        <>
            <main>
                <h1 className={styles.userProfileTitle}>Check Out Your Daily Entries!</h1>
                <UserProfileCard user={user} emailinfo={userInformation}/>
                <MyDays />
            </main>
        </>
    );
}