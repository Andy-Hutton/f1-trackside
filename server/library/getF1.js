const axios = require("axios");
async function getF1(request, response) {
  const API = `https://ergast.com/api/f1/current/next.json`;
  const res = await axios.get(API);
  response.status(200).json(res.data);
}

module.exports = getF1;
