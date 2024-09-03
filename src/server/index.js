import app from "./http";
import render from "./render";

app.get("*", async (req, res) => {
  const html = render(req, res);
  res.send(html);
});
