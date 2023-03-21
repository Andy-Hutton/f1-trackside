require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const getF1 = require("./library/getF1");
const getConstructor = require("./library/getConstructor");
const getTop10 = require("./library/getTop10");

app.get("/F1", getF1);
app.get("/Constructor", getConstructor);
app.get("/Top10", getTop10);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
