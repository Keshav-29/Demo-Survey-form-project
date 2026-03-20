const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // load .env

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection using .env
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const surveySchema = new mongoose.Schema({
  name: String,
  email: String,
  experience: String,
  feedback: String
});

const Survey = mongoose.model("Survey", surveySchema);

// API route
app.post("/api/survey", async (req,res)=>{
  try {
    const newSurvey = new Survey(req.body);
    await newSurvey.save();

    res.json({
      message:"Survey saved successfully"
    });
  } catch (error) {
    res.status(500).json({
      message:"Error saving survey"
    });
  }
});

// Start server
app.listen(5000,()=>{
  console.log("Server running on port 5000");
});