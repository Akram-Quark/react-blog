import React from "react";
import { Link } from "react-router-dom";
function Welcom() {
  return (
    <div className="welcom">
      <h1>
        Welcome to <span>myBlog</span> Poster !!
      </h1>
      <h3>
        You'r allwayes welcome to add blogs on our Platform dont worry about
        declaring your tuts
      </h3>
      <Link to="/add" className="btn">
        go add
      </Link>
    </div>
  );
}

export default Welcom;
