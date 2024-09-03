import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../share/App";

export default (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  return `
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
