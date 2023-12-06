import styles from "@/app/components/components.module.css"
const UserProfileCard = ({ user }) => {
    return(
        <div className={styles.UserProfile}>
            <h2>Name: {user?.name}</h2>
            <p>email: {user?.email}</p>
        </div>
    );
};

export default UserProfileCard;