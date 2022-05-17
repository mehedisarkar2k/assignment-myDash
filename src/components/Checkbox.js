const Checkbox = ({ id = "checkbox", label = "Are you agree?", ...rest }) => {
    return (
        <div>
            <input type="checkbox" id={id} {...rest} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;
