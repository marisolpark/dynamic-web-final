import styles from "./components.module.css";
const CreatePostForm = ({ createPostFunction }) => {
    return(
        <div>
            <h2>Create Post Form</h2>
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e) }>

                <label htmlFor="postContent">Post Content</label>
                <input type="text" id="postContent" name="postContent" />
                 
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;