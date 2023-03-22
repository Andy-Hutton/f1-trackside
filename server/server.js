require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// added below

const mongoose = require("mongoose");
const Forum = require("./library/forum");
const bp = require("body-parser");
app.use(bp.json());
// added above
const PORT = process.env.PORT || 8080;
const getF1 = require("./library/getF1");
const getConstructor = require("./library/getConstructor");
const getTop10 = require("./library/getTop10");

app.get("/F1", getF1);
app.get("/Constructor", getConstructor);
app.get("/Top10", getTop10);

// added below
// connect mongodb
mongoose.connect(process.env.DATABASE_URL);

app.get("/forums", async (request, response) => {
  console.log("Query String: ", request.query);

  // error handiling try/ if fails catch error
  try {
    const forum = await Forum.find(request.query);
    response.status(200).json(forum);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// create new entry
app.post("/forums", async (request, response) => {
  console.log(request.body);
  try {
    const newForum = await Forum.create(request.body);
    response.status(200).json(newForum);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// this should! delete entry
app.delete("/forums/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedForum = await Forum.findByIdAndDelete(id);
    response.status(200).send(deletedForum);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
});

// added above
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
