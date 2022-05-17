import styles from "../scss/TextField.module.scss";

const TextField = ({
    id = "text",
    label = "Name",
    placeholder,
    type = "text",
    ...rest
}) => {
    return (
        <div className={styles.textField}>
            <label className={styles.textField__label} htmlFor={id}>
                {label}
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
