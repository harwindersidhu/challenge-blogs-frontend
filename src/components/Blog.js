import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { selectedBlog, getSelectedBlog } = useContext(BlogContext);
  let { slug } = useParams();

  let [blogContent, setBlogContent] = useState(selectedBlog.content);

  //When we refresh page, selectedBlog data is lost.
  // So, I am getting slug value from url and then getting the blog content using slug value
  useEffect(() => {
    if (!blogContent) {
      getSelectedBlog(slug).then((data) => {
        setBlogContent(() => data[0].content);
      });
    }
  });

  return (
    <div className="blog">
      <div dangerouslySetInnerHTML={{ __html: blogContent }} />
    </div>
  );
};

export default Blog;
