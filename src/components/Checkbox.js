import styles from "../scss/Checkbox.module.scss";

const Checkbox = ({ id = "checkbox", label = "Are you agree?", ...rest }) => {
    return (
        <div className={styles.checkbox}>
            <input
                className={styles.checkbox__input}
                type="checkbox"
                id={id}
                {...rest}
            />
            <label className={styles.checkbox__label} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
