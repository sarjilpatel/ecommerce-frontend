import React from "react";
import Login from "./Login";
import PageTitle from "../../../components/Pageatitle/PageTitle";

const LoginPageWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle>Login</PageTitle>
      <Login />
    </div>
  );
};

export default LoginPageWrapper;
