import React from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./styles";
const firebase = require("firebase");

class SignupComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfermation: null,
      signupError: ""
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundLines}>
        <main className={classes.main}>
          <CssBaseline />
          <Typography style={{ color: "#444444" }} variant="h1">
            <span style={{ color: "green" }}>N</span>OTES
          </Typography>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign Up!
            </Typography>
            <form className={classes.form} onSubmit={e => this.submitSignup(e)}>
              {" "}
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-email-input">
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  autoFocus
                  id="signup-email-input"
                  onChange={e => this.userTyping("email", e)}
                ></Input>
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-password-input">
                  Create A password
                </InputLabel>
                <Input
                  type="password"
                  id="signup-email-input"
                  onChange={e => this.userTyping("password", e)}
                ></Input>
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-password-confermation-input">
                  Conferm Your password
                </InputLabel>
                <Input
                  type="password"
                  id="signup-password-confermation-input"
                  onChange={e => this.userTyping("passwordConfermation", e)}
                ></Input>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
            {this.state.signupError ? (
              <Typography
                className={classes.errorText}
                component="h5"
                varient="h6"
              >
                {this.state.signupError}
              </Typography>
            ) : null}
            <Typography
              component="h5"
              variant="h6"
              className={classes.hasAccountHeader}
            >
              Already Has Account
            </Typography>
            <Link className={classes.logInLink} to="/login">
              Login
            </Link>
          </Paper>
        </main>
      </div>
    );
  }
  formIsValid = () => this.state.password === this.state.passwordConfermation;

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;

      case "passwordConfermation":
        this.setState({ passwordConfermation: e.target.value });
        break;

      default:
        break;
    }
  };
  submitSignup = e => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ signupError: "Passwords do not match" });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        authRes => {
          const userObj = {
            email: authRes.user.email,
            friends: [],
            messages: []
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/dashboard");
              },
              dbErr => {
                // database error
                console.log("Failed to add user to the database: ", dbErr);
                this.setState({ signupError: "Failed to add user" });
              }
            );
        },
        authErr => {
          console.log("Failed to create user: ", authErr);
          this.setState({ signupError: "Failed to add user" });
        }
      );
  };
}
export default withStyles(styles)(SignupComponent);
