const styles = theme => ({
  main: {
    paddingTop: theme.spacing(10),
    width: "auto",
    textAlign: "center",
    // display: "block", // Fix IE 11 issue.
    // marginLeft: theme.spacing(3),
    // marginRight: theme.spacing(3),

    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: ".8",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: "#00A82D"
  },
  noAccountHeader: {
    width: "100%"
  },
  signUpLink: {
    width: "100%",
    textDecoration: "none",
    color: "#00A82D",
    fontWeight: "bolder"
  },
  errorText: {
    color: "red",
    textAlign: "center"
  },
  backgroundLines: {
    // backgroundImage:
    //   "linear-gradient(to right, #17b978, #3cc67b, #57d47d, #6fe17f, #87ee81, #78e886, #6ae28c, #5ddc90, #25c094, #00a390, #008685, #086972)",
    height: "100vh",

    backgroundColor: "#fff",
    backgroundImage:
      'url("https://www.transparenttextures.com/patterns/lined-paper.png")'
  }
});

export default styles;

/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
