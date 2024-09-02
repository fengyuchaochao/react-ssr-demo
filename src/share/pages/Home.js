import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div onClick={() => console.log("hello")}>
      Home page
      {/* <Link to="/about">to about page</Link> */}
    </div>
  );
};

export default Home;
