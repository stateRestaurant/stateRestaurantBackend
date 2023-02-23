require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
var path = require("path");
const session = require("express-session");
//db
require("./db/connection");

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(
  session({
    secret: "STATE",
    resave: false,
    saveUninitialized: true,
  })
);

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to Project 3");
});

app.listen(PORT, () => {
  console.log("I'm feeling nothin on port", PORT);
});
