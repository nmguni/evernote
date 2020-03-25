import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }
  // runs when component is mounted & renders the quill compnent
  // component did mount wll not get called again
  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
        <input
          className={classes.titleInput}
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={e => this.updateTitle(e.target.value)}
        ></input>
        <div className={classes.editorContainer}>
          <ReactQuill
            value={this.state.text}
            onChange={this.updateBody}
          ></ReactQuill>
        </div>
      </div>
    );
  }

  updateBody = async val => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async txt => {
    await this.setState({ title: txt });
    this.update();
  };
  // prevents updates from happening on every click
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text
    });
  }, 1500);
}

// passing styles into with styles that returns anther function we imideatly invoke
// takes styles ans creates an object called classes ( a prop called classes)
export default withStyles(styles)(EditorComponent);
