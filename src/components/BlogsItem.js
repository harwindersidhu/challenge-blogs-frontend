import React from "react";

const BlogsItem = (props) => {
  return (
    <div className="blog-item">
      <span className="blog-title">{props.title}</span>
      <img src={props.image} alt="" />
      <p>{props.date}</p>
    </div>
  );
};

export default BlogsItem;
