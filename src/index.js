import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";

import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDnFEC5BktqJwJK5u2ZUc2TB7uJpYWUStM",
  authDomain: "evernote-react-clone-46bb2.firebaseapp.com",
  databaseURL: "https://evernote-react-clone-46bb2.firebaseio.com",
  projectId: "evernote-react-clone-46bb2",
  storageBucket: "evernote-react-clone-46bb2.appspot.com",
  messagingSenderId: "1057579921198",
  appId: "1:1057579921198:web:8c0f460fa05c5594ef94bf",
  measurementId: "G-DMX02JEHQV",
});

// const routing = (
//   <Router>
//     <div id="routing-container">
//       <Route path="/login" component={LoginComponent}></Route>
//       <Route path="/signup" component={SignupComponent}></Route>
//       <Route path="/app" component={App}></Route>
//     </div>
//   </Router>
// );

ReactDOM.render(
  <Router>
    <div id="routing-container">
      <Route exact path="/" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/app" component={App}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
