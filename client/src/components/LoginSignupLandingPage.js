import React from "react";
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    FormHelperText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "../themes/loginSignup";
import { ReactComponent as Bubble } from "../assets/bubble.svg";

export const LoginSignupLandingPage = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const { boldText, pageText, historyToPush, switchPageButtonText, handleSubmit, submitButtonText, isLogin, formErrorMessage = {} } = props;

    return (
        <Grid container justifyContent="center" className={classes.root}>
            <Grid container justifyContent="center" className={classes.sidebar}>
                <Bubble className={classes.icon} />
                <Typography className={classes.slogan}>Converse with anyone <br /> with any language</Typography>
            </Grid>
            <Box className={classes.mainComponent}>
                <Grid container item className={classes.nav}>
                    <Typography className={classes.switchPageMessage}>{pageText}</Typography>
                    <Button className={classes.switchPageButton} onClick={() => history.push(historyToPush)}>{switchPageButtonText}</Button>
                </Grid>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid className={classes.formContainer}>
                        <Grid>
                            <Typography className={classes.formMessage}>{boldText}</Typography>
                            <FormControl fullWidth={true}>
                                <TextField
                                    aria-label="username"
                                    label="Username"
                                    name="username"
                                    type="text"
                                    fullWidth={true}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        {!isLogin &&
                            <Grid>
                                <FormControl fullWidth={true} >
                                    <TextField
                                        label="E-mail address"
                                        aria-label="e-mail address"
                                        type="email"
                                        name="email"
                                        fullWidth={true}
                                        required
                                    />
                                </FormControl>
                            </Grid>
                        }
                        <Grid>
                            <FormControl fullWidth={true} error={isLogin ? undefined : !!formErrorMessage.confirmPassword}>
                                <TextField
                                    aria-label="password"
                                    label="Password"
                                    type="password"
                                    inputProps={{ minLength: 6 }}
                                    name="password"
                                    required
                                />
                                {isLogin && (
                                    <FormHelperText>
                                        {formErrorMessage.confirmPassword}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        {!isLogin && (
                            <Grid>
                                <FormControl fullWidth={true} error={!!formErrorMessage.confirmPassword}>
                                    <TextField
                                        label="Confirm Password"
                                        aria-label="confirm password"
                                        type="password"
                                        inputProps={{ minLength: 6 }}
                                        name="confirmPassword"
                                        fullWidth={true}
                                        required
                                    />
                                    <FormHelperText>
                                        {formErrorMessage.confirmPassword}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                        )}

                        <Button className={classes.submitButton} type="submit" variant="contained" size="large">
                            {submitButtonText}
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Grid >
    );
}

