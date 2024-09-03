import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home page
      <br />
      <button onClick={() => alert("hello")}>say hello</button>
      <br />
      <Link to="/about">to about page</Link>
      <br />
      <a href="/about">to about page </a>
    </div>
  );
};

export default Home;
