const mongoose = require("mongoose");
const express = require("express");
const { connection } = require("../backend/database/db");
const app = express();
const cors = require("cors");
const { router } = require("./routes/allRoutes");
app.use(express.json());
app.use(router);
const dbConnect = async () => {
  await connection;
};

dbConnect().then(() => {
  app.listen(process.env.PORT, (req, res) => {
    console.log("server is running");
  });
});
