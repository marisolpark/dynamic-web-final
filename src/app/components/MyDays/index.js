"use-client"
import styles from "../MyDays/MyDays.module.css"

const MyDays = ({ userPost }) => (
    <div className={styles.containerBox}>
        <img src={userPost.imageURL} alt="" className={styles.imagepost}/>
        <p className={styles.postContStyle}>{userPost.postDate}</p>
        <p className={styles.postContStyle}>{userPost.postContent}</p>
    </div>
 );

 export default MyDays;