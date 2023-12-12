import { useState } from "react";
import styles from "./components.module.css";
const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] = useState();
    return(
        <div>
            {/* <h2 className={styles.formTitles}>Create Post Form</h2> */}
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e, imageUpload) }>

                <label htmlFor="postContent"></label>
                <input type="text" id="postContent" name="postContent" className={styles.inputBox} placeholder="Write today's entry!"/>

               <label htmlFor="image">Image</label>
               <input type="file" id="image" name="image" placeholder="choose image" accept="image/png,image/jpeg" onChange={(e) => setImageUpload(e.target.files[0])}/>

                 
                <button type="submit" className={styles.button}>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;