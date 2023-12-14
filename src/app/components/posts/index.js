"use-client"
 import styles from "../posts/PostCard.module.css"

 const PostCard = ({ post }) => {
    return (
        <div>
            <div className={styles.postContainer}>
                <h4 className={styles.userNameStyle}>{post.username}s diary entry:</h4>
                <p className={styles.postContStyle}>{post.postDate}</p>
                <img src={post.imageURL} className={styles.imagepost} alt="" />
                <p className={styles.postContStyle}>{post.postContent}</p>
            </div>
        </div>
    ) 
 }

 export default PostCard;

