const express = require("express");
const app = express();

app.use(express.json("content-type", "application/json"));
app.get("/", (req, res) => {
  res.send("Home");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
