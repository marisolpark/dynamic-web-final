import styles from "@/app/components/components.module.css"
const UserProfileCard = ({ user, emailinfo }) => {
    return(
        <div className={styles.userProfileCardStyle}>
            <p className={styles.userInfo}>Username: {user?.username}</p>
            <p className={styles.userInfo}>email: {emailinfo?.email}</p>
        </div>
    );
};

export default UserProfileCard;