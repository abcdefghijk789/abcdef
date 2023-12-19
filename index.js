import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("first application running on cloud");
});

app.listen(8080, () => {
  console.log(`server listen on 8080`);
});
