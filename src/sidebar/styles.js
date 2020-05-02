const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newChatBtn: {
    borderRadius: "0px",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    borderBottom: " 2px solid rgba(167, 167, 167, 0.5)",
    borderTop: " 2px solid rgba(167, 167, 167, 0.5)",
    borderRadius: "0px",
    backgroundColor: "#f2f2f2",
    color: "#4a4a4a",
    "&:hover": {
      backgroundColor: "#519a517a;",
      fontWeight: "bold",
    },
  },
  sidebarContainer: {
    marginTop: "0px",
    width: "300px",
    height: "100vh",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  newNoteInput: {
    width: "100%",
    margin: "0px",
    height: "35px",
    outline: "none",
    border: "none",
    paddingLeft: "5px",

    "&:focus": {
      outline: "2px solid rgba(81, 203, 238, 1)",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#e9e9e9",
    borderRadius: "0px",
    color: "#007300",
    "&:hover": {
      backgroundColor: "#519a517a;",
      fontWeight: "bold",
    },
  },
  sideList: {
    backgroundColor: "rgba(240, 240, 240, 0.62)",
    borderBottom: "2px solid rgba(167, 167, 167, 0.5)",
    padding: "0px",
  },
  logo: {
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center;",
    padding: ".5rem",
  },
});

export default styles;
