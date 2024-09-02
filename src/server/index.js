import app from "./http";
import render from "./render";

app.get("*", async (req, res) => {
  res.send(render(req));
});
