const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-black">
      {children}
    </label>
  );
};

export default Label;
