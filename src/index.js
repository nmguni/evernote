import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashBoardComponent from "./dashboard/dashboard";

import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBNzJcHZtNkFyCpWVIAUCrTja8HixHgxUc",
  authDomain: "evernote-72408.firebaseapp.com",
  databaseURL: "https://evernote-72408.firebaseio.com",
  projectId: "evernote-72408",
  storageBucket: "evernote-72408.appspot.com",
  messagingSenderId: "463967257840",
  appId: "1:463967257840:web:37d937535094472767ee35",
  measurementId: "G-YFGY4LP74K"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashBoardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
