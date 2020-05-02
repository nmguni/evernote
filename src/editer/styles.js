const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "calc(100% - 300px)",
    backgroundColor: "#f2f2f2",
    color: "green",
    paddingLeft: "50px",
    textTransform: "capitalize",
    borderLeft: "2px solid rgba(167, 167, 167, 0.5)",
  },
  editIcon: {
    position: "absolute",
    left: "310px",
    top: "12px",
    width: "10",
    height: "10",
    color: "#898989",
  },
  editorContainer: {
    height: "100vh",
    boxSizing: "border-box",
  },
  topBar: {
    display: "flex",
    backgroundColor: "#f2f2f2",
  },
  exitBtn: {
    color: "#d72323",
    padding: ".5rem",
    textDecoration: "none",
  },
});

export default styles;
