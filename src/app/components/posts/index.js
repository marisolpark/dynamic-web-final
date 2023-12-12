"use-client"
 import styles from "../posts/PostCard.module.css"

 const PostCard = ({ post }) => {
    return (
        <div className={styles.postContainer}>
            <p>{post.username}</p>
            <img src={post.imageURL} alt="" />
            <p>{post.postContent}</p>
        </div>
    )
 }

 export default PostCard;

