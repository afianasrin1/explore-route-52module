import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;

  return (
    <div className="friend">
      <h4>Name:{name}</h4>
      <h2>Email:{email}</h2>
      {/* <h2>
        <small>username:{username}</small>
      </h2> */}
      <h2>
        <small>
          username:<Link to={`/friend/${id}`}>{username}</Link>
        </small>
      </h2>
    </div>
  );
};

export default Friend;
