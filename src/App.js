import styles from "./App.module.scss";
import SignupForm from "./components/SignupForm";

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.container__content}>
                <div className={styles.container__content__leftBox}>
                    <div className={styles.container__content__leftBox__text}>
                        <h2>Choose a date range</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsum, quasi nihil?
                        </p>
                    </div>
                </div>

                <SignupForm />
            </div>
        </div>
    );
}

export default App;
