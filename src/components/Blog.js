import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const { selectedBlog } = useContext(BlogContext);

  return (
    <div className="blog">
      <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
    </div>
  );
};

export default Blog;
