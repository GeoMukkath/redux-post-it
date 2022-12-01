import React from "react";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((store) => store.posts);
  return (
    <div>
      <>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
          </div>
        ))}
      </>
    </div>
  );
};

export default PostList;
