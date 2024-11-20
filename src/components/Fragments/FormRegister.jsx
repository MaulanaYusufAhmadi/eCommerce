import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@.com"
        htmlFor="email"
        name="email"
      />
      <InputForm
        label="Username"
        type="text"
        placeholder="username"
        htmlFor="username"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        htmlFor="password"
        name="password"
      />
      <Button type="submit" variant="btn-sm w-full">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
