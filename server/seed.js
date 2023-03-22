const mongoose = require("mongoose");
require("dotenv").config();

const Forum = require("./library/forum");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Forum.create({
    name: "Andy Hutton",
    driver: "Hamilton",
    team: "Mercedes",
    comment: "Go Lewis",
  });
  await Forum.create({
    name: "Sam",
    driver: "max verstappen",
    team: "red bull",
    comment: "Go max, you can do it!",
  });

  console.log("Created a new entry");

  mongoose.disconnect();
}

seed();
