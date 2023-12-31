import Link from "next/link"
import styles from "./components.module.css"

const Header = ({ isLoggedIn, logoutUser }) => {
    return(
        <header className={styles.Header}>
            <p className={styles.logo}>Daily Diaries</p>
            <nav className={styles.HeaderNav}>
            {isLoggedIn && (
                <>
                <Link href="/profile">User Profile</Link>
                <Link href="/createpost">Post New Entry</Link>
                <Link href="/">Friends</Link>
                <a onClick={logoutUser}>Log Out</a>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <Link href="/login">Login</Link>
                    <Link href="/create">Create User</Link>
                </>
            )}
            </nav>
        </header>
    );
}; 

export default Header;