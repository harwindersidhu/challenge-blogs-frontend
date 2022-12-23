import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogsItem from "./BlogsItem";
import { useNavigate } from "react-router";

const Home = (props) => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs, getBlogsCount, pageCount, setSelectedBlog } =
    useContext(BlogContext);
  const navigate = useNavigate();

  const nextPage = () => {
    if (props.page < pageCount) {
      props.setPage(props.page + 1);
    }
  };

  const prevPage = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };

  const displayBlog = (blog) => {
    console.log(blog);
    setSelectedBlog(() => blog);
    const blogPath = `/blog/${blog.slug}`;
    navigate(blogPath);
  };

  useEffect(() => {
    getBlogsCount();
    getBlogs(props.page).then((data) => {
      setBlogs(() => data);
    });
  }, [props.page]);

  const blogsItems = blogs.map((blog) => (
    <BlogsItem
      key={blog.id}
      title={blog.title}
      image={blog.image}
      date={blog.published_at}
      displayBlog={() => displayBlog(blog)}
    />
  ));

  return (
    <div className="home">
      <span className="title">Blogs</span>
      <div className="home-blogs">{blogsItems}</div>
      <div className="pagination">
        {props.page > 1 && (
          <button className="previous-button" onClick={prevPage}>
            Prev
          </button>
        )}
        {props.page < pageCount && (
          <button className="next-button" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
