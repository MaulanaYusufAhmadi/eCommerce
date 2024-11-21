import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
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
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
