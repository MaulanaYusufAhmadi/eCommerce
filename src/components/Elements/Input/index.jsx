import React from "react";
import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
  const { label, type, placeholder, htmlFor, name } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor} name={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
