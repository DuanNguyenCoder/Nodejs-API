const express = require("express");
const { getProduct } = require("./controller/userController");
const mongodb = require("./config/db");
const app = express();
const port = 5000;
app.use(express.json());

app.use("/api", getProduct);

app.get("/", (req, res) => {
  res.send("node api");
});

const start = async () => {
  await mongodb();
  app.listen(port, () => {
    console.log(`server is start in port ${port} `);
  });
};

start();
