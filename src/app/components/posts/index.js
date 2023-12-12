"use-client"
 import styles from "../posts/PostCard.module.css"

 const PostCard = ({ post }) => {
    return (
        <div>
            <div className={styles.postContainer}>
                <p>{post.username}</p>
                <img src={post.imageURL} alt="" />
                <p>{post.postContent}</p>
            </div>
        </div>
    )
 }

 export default PostCard;

