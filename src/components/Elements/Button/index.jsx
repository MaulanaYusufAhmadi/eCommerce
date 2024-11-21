const Button = (props) => {
  const { children, type = "button", variant, onClick = () => {} } = props;
  return (
    <button
      className={`${variant}`}
      type={type ? type : "button"}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
