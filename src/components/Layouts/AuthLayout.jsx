import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-primary_1">{title}</h1>
        <p className="font-medium text-primary_2 mb-6">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link className="font-bold text-primary_1" to="/register">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link className="font-bold text-primary_1" to="/login">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
