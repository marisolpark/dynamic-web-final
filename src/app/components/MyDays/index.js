"use-client"
import styles from "../MyDays/MyDays.module.css"

const MyDays = ({ userPost }) => (
    <div className={styles.containerBox}>
        <img src={userPost.imageURL} alt="" />
        <p>{userPost.postContent}</p>
    </div>
 );

 export default MyDays;