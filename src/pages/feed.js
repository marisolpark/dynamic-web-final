import { useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "@/app/components/posts";
import "../app/globals.css";

export default function UserProfile({ isLoggedIn }) {
    const router = useRouter();

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