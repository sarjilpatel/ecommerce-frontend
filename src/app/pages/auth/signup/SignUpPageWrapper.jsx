import React from "react";
import SignUp from "./SignUp";
import PageTitle from "../../../components/Pageatitle/PageTitle";

const SignUpPageWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle>Signup</PageTitle>
      <SignUp />
    </div>
  );
};

export default SignUpPageWrapper;
