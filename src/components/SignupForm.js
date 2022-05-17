import { useState } from "react";
import styles from "../scss/SignupForm.module.scss";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./Form";
import TextField from "./TextFiled";
import SuccessModal from "../components/SuccessModal";

const initialValue = {
    email: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    toc: false,
};

const SignupForm = () => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const setValue = name === "toc" ? checked : value;
        setError((prevData) => ({ ...prevData, [name]: false }));

        if (name === "password2") {
            setError((prevData) => ({ ...prevData, password: false }));
            setErrorMessage("");
        }

        if (!value) setError((prevData) => ({ ...prevData, [name]: true }));

        setData((prevData) => {
            return {
                ...prevData,
                [name]: setValue,
            };
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!data.toc) {
            setError((prevData) => ({ ...prevData, toc: true }));
            return;
        }

        for (let key in data) {
            if (data[key] === "")
                setError((prevData) => ({
                    ...prevData,
                    [key]: true,
                }));
            else
                setError((prevData) => ({
                    ...prevData,
                    [key]: false,
                }));
        }

        if (!data.email || !data.password || !data.name || !data.phone) {
            return;
        }

        if (data.password !== data.password2) {
            setErrorMessage("Confirm password didn't match");
            setError((prevData) => ({ ...prevData, password: true }));
            return;
        } else {
            setErrorMessage("");
        }

        console.log(data);
        setShowModal(true);
    };

    return (
        <>
            <div className={styles.container}>
                <h1>Create an account</h1>

                <From onSubmit={onSubmit}>
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        label="Your email address"
                        value={data.email}
                        onChange={handleChange}
                        error={error?.email}
                    />
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        label="Your password"
                        value={data.password}
                        onChange={handleChange}
                        error={error?.password}
                    />
                    <TextField
                        type="password"
                        id="password2"
                        name="password2"
                        label="Confirm your password"
                        value={data.password2}
                        onChange={handleChange}
                        error={error?.password2}
                        message={errorMessage}
                    />
                    <TextField
                        type="text"
                        id="name"
                        name="name"
                        label="Your full name"
                        value={data.name}
                        onChange={handleChange}
                        error={error?.name}
                    />
                    <TextField
                        type="tel"
                        id="phone"
                        name="phone"
                        label="Your phone number"
                        value={data.phone}
                        onChange={handleChange}
                        error={error?.phone}
                    />
                    <Checkbox
                        name="toc"
                        label="I read and agree with Terms and Conditions"
                        value={data.toc}
                        onChange={handleChange}
                        error={error?.toc}
                    />

                    <Button>Create Account</Button>
                </From>
            </div>

            {showModal && <SuccessModal handleModal={setShowModal} />}
        </>
    );
};

export default SignupForm;
