import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePost } from "../features/posts/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");

  const authors = useSelector((store) => store.author);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const dispatch = useDispatch();

  const postMe = () => {
    console.log(title, content, authorId);
    if (title && content) {
      dispatch(savePost(title, content, authorId));
    }
    setTitle("");
    setContent("");
  };

  const onAuthorChange = (e) => {
    setAuthorId(e.target.value);
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(authorId);

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
        <select value={authorId} onChange={onAuthorChange}>
          {authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
        <label>Content</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={postMe} disabled={!canSave}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
