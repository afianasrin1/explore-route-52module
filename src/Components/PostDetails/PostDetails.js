import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, userId } = post;
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h2>Details:{id}</h2>
      <h2>title:{title}</h2>
      <button onClick={handleNavigate}>get the Author</button>
    </div>
  );
};

export default PostDetails;
