import React from "react";

function AllBlogs() {
  const blogs = [
    {
      id: 1,
      title: "blog post1",
      body: "something interesting ",
      date: new Date(),
    },
    {
      id: 2,
      title: "blog post2",
      body: "something interesting ",
      date: new Date(),
    },
    {
      id: 3,
      title: "blog post3",
      body: "something interesting ",
      date: new Date(),
    },
  ];
  return (
    <div className="wrapper">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <span className="delete">X</span>
        </div>
      ))}
    </div>
  );
}

export default AllBlogs;
