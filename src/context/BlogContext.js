import { createContext, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState({});

  const getBlogs = async (page) => {
    let getBlogsApi = `api/blogs/${page}`;

    try {
      const response = await axios.get(getBlogsApi);
      return response.data;
    } catch (e) {
      console.log("Error while getting blogs: ", e);
      return [{ error: e }];
    }
  };

  const getBlogsCount = async () => {
    let getBlogsApi = `api/blogs/`;

    try {
      const response = await axios.get(getBlogsApi);
      console.log("Number of pages: ", Math.ceil(response.data[0].count / 6));
      setPageCount(() => Math.ceil(response.data[0].count / 6));
    } catch (e) {
      console.log("Error while getting blogs: ", e);
    }
  };

  const getSelectedBlog = async (slug) => {
    let getselectedBlogApi = `api/blogs/slug/${slug}`;

    try {
      const response = await axios.get(getselectedBlogApi);
      console.log("Response: ", response.data);
    } catch (e) {
      console.log("Error while getting blogs: ", e);
    }
  };

  const value = {
    getBlogs,
    getSelectedBlog,
    getBlogsCount,
    pageCount,
    selectedBlog,
    setSelectedBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
