const axios = require("axios");
async function getTop10(request, response) {
  const API = `http://ergast.com/api/f1/2023/driverstandings.json`;
  const res = await axios.get(API);
  response.status(200).json(res.data);
}

module.exports = getTop10;
