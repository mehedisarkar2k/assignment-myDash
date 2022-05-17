import Checkbox from "./Checkbox";
import From from "./Form";
import TextField from "./TextFiled";

const SignupForm = () => {
    return (
        <div>
            <h1>Create an account</h1>

            <From>
                <TextField />
                <Checkbox />
            </From>
        </div>
    );
};

export default SignupForm;
