const Input = (props) => {
    const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full text-black py-2 px-3"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;