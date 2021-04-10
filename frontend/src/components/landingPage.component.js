import React from "react";
import "../common.css";

const LandingPage = (props) => {
  return (
    <div className="container">
      <img
        className="main-background"
        src="pages/background.png"
        alt="background"
      />
      <img className="main-logo" src="driftlogo.svg" alt="drift-logo" />
      <p className="main-start-adventure-text">your next adventure awaits</p>
      <button className="main-login-button" onClick={props.updatePage}>
        sign up
      </button>
      <button className="main-login-button-2" onClick={props.updatePage}>
        login
      </button>
    </div>
  );
};

export default LandingPage;
