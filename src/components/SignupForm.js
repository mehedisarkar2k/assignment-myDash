import styles from "../scss/SignupForm.module.scss";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./Form";
import TextField from "./TextFiled";

const SignupForm = () => {
    return (
        <div className={styles.container}>
            <h1>Create an account</h1>

            <From>
                <TextField type="email" id="email" label="Your email address" />
                <TextField
                    type="password"
                    id="password"
                    label="Your password"
                />
                <TextField
                    type="password"
                    id="password2"
                    label="Confirm your password"
                />
                <TextField type="text" id="name" label="Your full name" />
                <TextField type="tel" id="phone" label="Your phone number" />
                <Checkbox label="I read and agree with Terms and Conditions" />

                <Button>Create Account</Button>
            </From>
        </div>
    );
};

export default SignupForm;
