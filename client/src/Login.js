import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";
import { LoginSignupLandingPage } from "./components/LoginSignupLandingPage";

const Login = (props) => {
  const { user, login } = props;
  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <LoginSignupLandingPage
      pageText={"Don't have an account?"}
      boldText={"Welcome back!"}
      historyToPush={"/register"}
      switchPageButtonText={"Register"}
      handleSubmit={handleLogin}
      submitButtonText={"Login"}
      isLogin={true}
      formErrorMessage={undefined}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
