const styles = (theme) => ({
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#519a517a;",
      fontWeight: "bold",
    },
  },
  textSection: {
    maxWidth: "85%",
  },
  deleteIcon: {
    position: "absolute",
    color: "#565656",
    right: "5px",
    top: "calc(50% - 15px)",
    "&:hover": {
      color: "#d72323",
    },
  },
});

export default styles;
