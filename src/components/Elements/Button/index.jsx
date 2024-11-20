const Button = (props) => {
    const { children, type, variant} = props;
    return (
      <button
        className={`${variant}`}
        type={type ? type : "button"}
      >
        {children}
      </button>
    );
  };

export default Button