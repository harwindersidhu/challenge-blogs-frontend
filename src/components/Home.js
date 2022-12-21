import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogsItem from "./BlogsItem";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContext(BlogContext);

  useEffect(() => {
    getBlogs(1).then((data) => {
      setBlogs(() => data);
    });
  }, []);
  console.log("Blogs: ", blogs);
  const blogsItems = blogs.map((blog) => (
    <BlogsItem
      key={blog.id}
      title={blog.title}
      image={blog.image}
      date={blog.published_at}
    />
  ));

  return (
    <div className="home">
      <span className="title">Blogs</span>
      <div className="home-blogs">{blogsItems}</div>
      <div className="pagination">
        <button className="previous-button">Prev</button>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Home;
