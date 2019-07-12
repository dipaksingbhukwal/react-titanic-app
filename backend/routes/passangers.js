const csv = require("csv-parser");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const passengers = require("../models/passangers");

const router = express.Router();

router.get("/seeder", (req, res, next) => {
  passengers.remove([]);
  fs.createReadStream("public/data/train.csv")
    .pipe(csv())
    .on("data", row => {
      const Passengers = new passengers();
      Passengers.PassengerId = row.PassengerId;
      Passengers.Survived = row.Survived;
      Passengers.Pclass = row.Pclass;
      Passengers.Name = row.Name;
      Passengers.Sex = row.Sex;
      Passengers.Age = row.Age;
      Passengers.SibSp = row.SibSp;
      Passengers.Parch = row.Parch;
      Passengers.Ticket = row.Ticket;
      Passengers.Fare = row.Fare;
      Passengers.Cabin = row.Cabin;
      Passengers.Embarked = row.Embarked;
      Passengers.save().then(d => {});
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      passengers.find().then(data => {
        console.log(data.length);
        res.send(data);
      });
    });
});
router.get("/", (req, res, next) => {
  passengers.find().then(data => {
    console.log(data.length);
    res.send(data);
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);

  const Passengers = {
    PassengerId: req.body.PassengerId,
    Survived: req.body.Survived,
    Pclass: req.body.Pclass,
    Name: req.body.Name,
    Sex: req.body.Sex,
    Age: req.body.Age,
    SibSp: req.body.SibSp,
    Parch: req.body.Parch,
    Ticket: req.body.Ticket,
    Fare: req.body.Fare,
    Cabin: req.body.Cabin,
    Embarked: req.body.Embarked
  };
  new passengers(Passengers).save().then(d => {
    res.send(d);
  });
});

module.exports = router;
