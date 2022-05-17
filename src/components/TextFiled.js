const TextField = ({
    id = "text",
    label = "Name",
    placeholder = "Name",
    type = "text",
    ...rest
}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} {...rest} />
        </div>
    );
};

export default TextField;
