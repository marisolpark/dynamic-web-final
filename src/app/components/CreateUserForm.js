import styles from "./components.module.css";

const CreateUserForm = ({ createUser }) => {
    return(
        <div>
            <form className={styles.Form} onSubmit={(e) => createUser(e) }>

                <label htmlFor="username"></label>
                <input type="text" name="username" id="username" placeholder="User Name" className={styles.inputBox} />

                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" className={styles.inputBox} />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" className={styles.inputBox} />
                 
                <button type="submit" className={styles.button}>Create User</button>
            </form>
        </div>
    );
};

export default CreateUserForm;