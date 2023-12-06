import { useEffect } from "react";
import { useRouter } from "next/router";
import UserProfileCard from "@/app/components/UserProfileCard";
import MyDays from "@/app/components/MyDays";

export default function UserProfile({ isLoggedIn, userInformation }) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    return(
        <>
            <main>
                <h1>UserProfile</h1>
                <UserProfileCard user={userInformation} />
                <MyDays />
            </main>
        </>
    );
}