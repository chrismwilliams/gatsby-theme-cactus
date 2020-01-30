// This component 'shadows' gatsby-theme-blog-core post.js file
import React from "react";
import Post from "../../components/post";

export default ({ location, data }) => {
  const { blogPost, previous, next } = data;

  return (
    <Post
      data={{ ...data, post: blogPost }}
      location={location}
      previous={previous}
      next={next}
    />
  );
};
