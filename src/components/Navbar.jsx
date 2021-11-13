import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/add" className="link">
        {" "}
        <li>Add Blog</li>{" "}
      </Link>
      <Link to="/" className="link">
        <span>myBlog</span>{" "}
      </Link>
      <Link to="/blogs" className="link">
        <li>all Blogs</li>
      </Link>
    </nav>
  );
}

export default Navbar;
