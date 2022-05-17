import styles from "../scss/Button.module.scss";

const Button = ({ children, ...rest }) => {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    );
};

export default Button;
