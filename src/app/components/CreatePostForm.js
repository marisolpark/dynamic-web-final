import { useState } from "react";
import styles from "./components.module.css";
const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] = useState();
    return(
        <div>
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e, imageUpload) }>

                <label htmlFor="postContent"></label>
                <input type="text" id="postContent" name="postContent" className={styles.inputBox} placeholder="Write today's entry!"/>

                <label htmlFor="postDate"></label>
                <input type="text" id="postDate" name="postDate" className={styles.inputBox} placeholder="Entry date (mm/dd/yy)"/>

               <label htmlFor="image" className={styles.imgLable}>Image</label>
               <input type="file" id="image" name="image" placeholder="choose image" accept="image/png,image/jpeg" onChange={(e) => setImageUpload(e.target.files[0])} className={styles.imgInputButton}/>

                <button type="submit" className={styles.button}>Create Post</button>
            </form>
        </div>
    );
}; 

export default CreatePostForm;