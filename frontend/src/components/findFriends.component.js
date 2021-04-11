import React from "react";
import "../common.css";


const FindFriends = (props) => {
  return (
    <div className="find-friends-wrapper">
      <img
        className="find-friends-background"
        alt="find-friends"
        src="/pages/findFriends.png"
      />
      <p className="find-friends-text">find friends</p>
      <input
        className="find-friends-input"
        type="text"
        placeholder="username or email"
      />
      <button className="search-button">
        search
      </button>
      <button className="next-button" onClick={props.updatePage}>
        next
      </button>
    </div>
  );
};

export default FindFriends;
