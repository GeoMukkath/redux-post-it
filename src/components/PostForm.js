import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePost } from "../features/posts/postSlice";
import { nanoid } from "@reduxjs/toolkit";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();

  const postMe = () => {
    if (title && content) {
      dispatch(
        savePost({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <h1>Post Me</h1>
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
        <label>Content</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={postMe}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
