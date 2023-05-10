import React, { useState } from "react";
import SignUp from "./SignUp";
import { SignIn } from "./SignIn";

const Login = () => {
  const [first, setfirst] = useState(false);
  return (
    <React.Fragment>
      <SignUp />
      <SignIn />
    </React.Fragment>
  );
};

export default Login;
