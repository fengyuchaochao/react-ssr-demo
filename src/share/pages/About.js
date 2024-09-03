import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div onClick={() => console.log("hello about page")}>
      About page
      {/* <Link to="/home">to home page</Link> */}
    </div>
  );
};

export default About;
