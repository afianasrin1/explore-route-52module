import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <p>title:{title}</p>
      <p>body:{body}</p>
      <Link to={`/post/${id}`}>visit btton sara 1:{id}</Link>

      <Link to={`/post/${id}`}>
        <button>Shoe Details 2</button>
      </Link>

      <button onClick={handleNavigate}>show Details 3</button>
    </div>
  );
};

export default Post;
