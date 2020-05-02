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
  apiKey: "AIzaSyDxUnQL5-daHACdlIEv4hsJ5XWsNk2f0wo",
  authDomain: "evernote-clone-f30ff.firebaseapp.com",
  databaseURL: "https://evernote-clone-f30ff.firebaseio.com",
  projectId: "evernote-clone-f30ff",
  storageBucket: "evernote-clone-f30ff.appspot.com",
  messagingSenderId: "567186858504",
  appId: "1:567186858504:web:4934900e9ff5a04cefa7bd",
  measurementId: "G-0WNEPZ8NQF",
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
      <Route path="/login" component={LoginComponent}></Route>
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
