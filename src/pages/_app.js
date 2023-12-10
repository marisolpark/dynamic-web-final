import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { addDoc, getFirestore } from "firebase/firestore";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";

export default function MyApp({ Component, pageProps }) {
    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [error, setError] = useState(null);

    const createUser = useCallback(async (e) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        const db = getFirestore();
        let user;

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            user = userCredentials.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn({ error, errorCode, errorMessage });
            setError(errorMessage);
        });

        await addDoc(collection(db, "users"), {
            username: username,
            userId: user.uid,
        })

        .then(() => {
            const userToSet = {...user, username}
            setIsLoggedIn(true);
            setUserInformation(userToSet);
            setError(null);
        })

    }, [setError, setIsLoggedIn, setUserInformation]);

    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            setIsLoggedIn(true);
            setUserInformation(user);
            setError(null);
        })
        .catch((error) => {
            const errorCode = error.errorCode;
            const errorMessage = error.message;
            console.warn({ error, errorMessage });
            setError(errorMessage);
        });
    }, [setError, setIsLoggedIn, setUserInformation]);

    const logoutUser = useCallback(() => {
        const auth = getAuth()
        signOut(auth)
        .then(()=> {
            setUserInformation(null);
            setIsLoggedIn(false);
        })
        .catch((error) => {
            const errorCode = error.errorCode;
            const errorMessage = error.message;
            console.warn({ error, errorCode, errorMessage });
            setError(errorMessage);
        })
    }, [signOut, setIsLoggedIn, setUserInformation, signOut]);

    // initialize firebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);
    }, []);

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();

            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUserInformation(user);
                    setIsLoggedIn(true);
                } else {
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                setIsLoading(false);
            });
        }
    }, [appInitialized]);

    if(isLoading) return null;

    return (
        <>
            <Header logoutUser={logoutUser} isLoggedIn={isLoggedIn} />
            <Component
                {...pageProps}
                createUser={createUser}
                isLoggedIn={isLoggedIn}
                loginUser={loginUser}
                userInformation={userInformation}
            />
            <p>{error}</p>
        </>
    )
}