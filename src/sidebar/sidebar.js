import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebaritem";
import logo from "../images/logo.png";

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <div className={classes.logo}>
            <img src={logo} alt="evernote logo" height="50px" />
          </div>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancle" : "New Note"}
          </Button>
          {/*  add new note  */}
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter note title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Add Note{" "}
              </Button>
            </div>
          ) : null}
          <List className={classes.sideList}>
            {/*  map all notes from props and map to actual elements */}
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  {/* <Divider></Divider> */}
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };
  // n = note i = index
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(styles)(SidebarComponent);
