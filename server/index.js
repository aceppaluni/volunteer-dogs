const cors = require("cors");
//const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
//const nodeMailer = require("nodemailer");
//const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: false}))

const Dog = require('./models/Dog')

const url = "mongodb://localhost:27017/dogsDb"

mongoose.connect(url, {
    // blank
})
.then(() => {
    console.log("Connected to mongoDB")
})
.catch((error) => {
    console.log(error)
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

app.get("/dogs", async (req, res) => {
    const { name } = req.body;
    try {
      const dogProfiles = await Dog.find(name)
      //console.log(dogProfiles)
      return res.status(200).json(dogProfiles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching pup profiles " });
    }
  });
