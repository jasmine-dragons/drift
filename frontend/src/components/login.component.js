import React, { useState } from "react";
import "../common.css";

const LandingPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <img
        className="main-background"
        src="pages/background.png"
        alt="background"
      />
      <img className="main-logo" src="driftlogo.svg" alt="drift-logo" />
      <input
        className="login-input login-email"
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input login-password"
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="main-buttons">
        <button className="login-button" onClick={props.updatePage}>
          log in
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
