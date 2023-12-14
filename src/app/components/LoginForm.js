import styles from "./components.module.css"

const LoginForm = ({ loginUser }) => {
    return(
        <div>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>

                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="email" className={styles.inputBox} />

                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="password" className={styles.inputBox} />
                 
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;