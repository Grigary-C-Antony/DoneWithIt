const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// req;

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/shopping";
mongoose.connect(uri);
//{ useNewUrlParser: true, useCreateIndex: true }
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// !Routes:-
// app.use("/exercise", exerciserouter);
// app.use("/user", userrouter);
// !Routes:-

app.get("/", function (req, res) {
  res.send("hi there");
});

app.listen(port, () => {
  console.log(`server ${port} il odunnund`);
});
