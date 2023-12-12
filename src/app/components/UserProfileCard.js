import styles from "@/app/components/components.module.css"
const UserProfileCard = ({ user, emailinfo }) => {
    return(
        <div className={styles.UserProfile}>
            <p>Username: {user?.username}</p>
            <p>email: {emailinfo?.email}</p>
            {/* <p>{user?.email}</p> */}
        </div>
    );
};

export default UserProfileCard;