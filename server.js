const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use((req, res, next) => {
  const error = new Error("Not found!");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    msg: error.message,
  });
});

app.listen(4000, () => {
  console.log("Server is running with port::: 4000!");
});
