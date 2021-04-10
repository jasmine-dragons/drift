import React from "react";
import "../common.css";
const FindFriends = (props) => {
  return (
    <div className="find-friends-wrapper">
      <img
        className="/find-friends-background"
        alt="find-friends"
        src="/pages/findFriends.png"
      />
      <h1 className="find-friends-text">find friends</h1>
      <button className="search-button" onClick={props.updatePage}>
        Search
      </button>
    </div>
  );
};

export default FindFriends;
