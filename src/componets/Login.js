import React from "react";
import { useDispatch, useSelector } from "react-redux";

import VerLogin from "./VerLogin";
import { useForm } from "../Hooks/useForm";
import {
  startLoginEmailPassword,
  startGoogleLogin,
  startFacebookLogin,
  recoverPassword
} from "../actions/Auth";

const Login = () => {
  const dispatch = useDispatch();

  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(startGoogleLogin());
  };
  const handleFacebook = () => {
    dispatch(startFacebookLogin());
  };
  
  const handleRecover = (e) => {
    e.preventDefault();
    dispatch(recoverPassword(email))
  }

  return (
    <div>
      <VerLogin
        email={email}
        password={password}
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
        handleGoogle={handleGoogle}
        loading={loading}
        handleFacebook={handleFacebook}
        handleRecover={handleRecover}
      />
    </div>
  );
};

export default Login;
