import { useEffect } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "@/app/components/UserProfileCard";
import MyDays from "@/app/components/MyDays";
import styles from "./pages.module.css";
import "../app/globals.css"

export default function UserProfile({ isLoggedIn, userInformation }) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    return(
        <>
            <main>
                <h1 className={styles.userProfileTitle}>Check Out Your Daily Entries!</h1>
                <UserProfileCard user={userInformation} />
                <MyDays />
            </main>
        </>
    );
}