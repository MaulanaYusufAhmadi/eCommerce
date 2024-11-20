import React from "react";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-primary_1">{title}</h1>
      <p className="font-medium text-primary_2 mb-6">
        Welcome, please enter your details
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;
