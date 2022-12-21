import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContext(BlogContext);

  useEffect(() => {
    getBlogs(1).then((data) => {
      setBlogs(() => data);
    });
  }, []);
  console.log("Blogs: ", blogs);

  return (
    <div className="blog">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
