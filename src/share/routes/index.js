import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";

export default [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/about",
    element: <About />,
    exact: true,
  },
];
