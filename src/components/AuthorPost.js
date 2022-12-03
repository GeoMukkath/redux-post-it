import React from "react";
import { useSelector } from "react-redux";

const AuthorPost = ({ authorId }) => {
  console.log(typeof authorId);
  const authors = useSelector((store) => store.author);
  const author = authors.find((author) => author.id === Number(authorId));

  return <span>{author ? author.name : "unknown author"}</span>;
};

export default AuthorPost;
