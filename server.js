const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/sound/:name", function (req, res) {
  const { name } = req.params;
  console.log(name);
  if (name == "dog") {
    res.json({ sound: "멍" });
  } else if (name == "cat") {
    res.json({ sound: "왜ㅔㅔ옹" });
  } else if (name == "pig") {
    res.json({ sound: "민석이" });
  } else {
    res.json({ sound: "몰라 그게 뭔지" });
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
