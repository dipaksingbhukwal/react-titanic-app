const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./config/dbconfig");

const app = express();

// Load Routes
const passangers = require("./routes/passangers");

/*********************************/
// Middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Mongoose Connect
// mongoose.connect(db.url, { useNewUrlParser: true }, (err, db) => {
//   if (err) {
//     console.log("Could not connect to the database " + err);
//     throw err;
//   } else {
//     // console.log(db);
//     var dbo = db.db("titanic");
//     dbo.collection("passengers").drop(function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   }
// });

mongoose.connect(db.url, { useNewUrlParser: true }).then(
  database => {
    console.log("Connected to MongoDB database 'titanic'");
  },
  err => {
    console.log("Could not connect to the database " + err);
  }
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
app.use("/passangers", passangers);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("application running on port 5000");
});

module.exports = app;
