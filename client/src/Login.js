import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import { useStyles } from "./themes/loginSignup";

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
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
    <Grid container justifyContent="center" className={classes.root}>
      <Typography variant='h3' align='center' className={classes.mainText}>
        Converse with anyone <br /> with any language
      </Typography>
      <Box className={classes.formContainer}>
        <Grid container item className={classes.switchPageContainer}>
          <Typography className={classes.switchPageCTA}>Don't have an account?</Typography>
          <Button className={classes.switchPageButton} color='primary' onClick={() => history.push("/register")}>Create account</Button>
        </Grid>
        <form onSubmit={handleLogin} className={classes.inputsForm, classes.login}>
          <Grid>
            <Typography className={classes.genericText} align='center' variant="h3">Welcome Back!</Typography>
            <Grid>
              <FormControl margin="none" required className={classes.inputContainer} fullWidth={true}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="dense" required className={classes.inputContainer} fullWidth={true}>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button className={classes.submitButton} color="primary" type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
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


