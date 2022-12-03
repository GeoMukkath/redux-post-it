import React from "react";
import { useSelector } from "react-redux";

const AuthorPost = ({ authorId }) => {
  console.log(authorId); // Prints authorId as expected
  const authors = useSelector((store) => store.author);
  console.log(authors); // Prints array
  const author = authors.find((author) => author.id === authorId);
  console.log(author); // Prints undefined

  return <span>{author ? author.name : "unknown author"}</span>;
};

export default AuthorPost;
