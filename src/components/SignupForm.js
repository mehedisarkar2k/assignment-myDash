import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./Form";
import TextField from "./TextFiled";

const SignupForm = () => {
    return (
        <div>
            <h1>Create an account</h1>

            <From>
                <TextField label="Your email address" />
                <Checkbox label="I read and agree with Terms and Conditions" />

                <Button>Create Account</Button>
            </From>
        </div>
    );
};

export default SignupForm;
