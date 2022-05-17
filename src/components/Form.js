const From = ({ children, ...rest }) => {
    return <form {...rest}>{children}</form>;
};

export default From;
