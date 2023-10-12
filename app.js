const express = require("express");
const { getUser, createUser } = require("./controller/userController");
const mongodb = require("./config/db");
const { errorHandler, notFound } = require("./midleware/errorHandler");
const router = require("./routes/user");
const app = express();
const port = 5000;

// alow client send json request
app.use(express.json());

// app.use(notFound);
app.use(errorHandler);

app.use("/api", router);

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
