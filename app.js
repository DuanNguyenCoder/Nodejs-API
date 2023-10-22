require("dotenv").config();
const express = require("express");
const { getUser, createUser } = require("./controller/userController");
const mongodb = require("./config/db");
const { errorHandler, notFound } = require("./midleware/errorHandler");
const router = require("./routes/user");
const app = express();
const port = process.env.PORT;

// alow client send json request
app.use(express.json());

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await mongodb();
  app.listen(port, () => {
    console.log(`server is start in port ${port} `);
  });
};

start();
