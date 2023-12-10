import styles from "@/app/components/components.module.css"
const UserProfileCard = ({ user }) => {
    return(
        <div className={styles.UserProfile}>
            <p>Username: {user?.username}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default UserProfileCard;