import React from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";

export default function App() {
  return (
    <div>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </div>
  );
}
