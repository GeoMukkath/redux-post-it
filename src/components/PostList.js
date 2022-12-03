import React from "react";
import { useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";

const PostList = () => {
  const posts = useSelector((store) => store.posts);
  return (
    <div>
      <>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <span>
              <AuthorPost authorId={post.authorId} />
            </span>
            <p>{post.content.substring(0, 100)}</p>
            <p>{post.date}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default PostList;
