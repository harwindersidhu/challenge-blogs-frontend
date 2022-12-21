import { createContext } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  // const [blogs, setBlogs] = useState([]);
  // const [selectedBlog, setSelectedBlog] = ({});

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
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
