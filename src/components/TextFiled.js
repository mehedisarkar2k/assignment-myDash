import styles from "../scss/TextField.module.scss";

const TextField = ({
    id = "text",
    label = "Name",
    placeholder,
    type = "text",
    error,
    message,
    ...rest
}) => {
    return (
        <div
            className={`${styles.textField} ${error || message ? "error" : ""}`}
        >
            <label className={styles.textField__label} htmlFor={id}>
                {message ? message : label}
                {(error || message) && <sup>*</sup>}
            </label>
            <input
                className={styles.textField__input}
                id={id}
                type={type}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export default TextField;
