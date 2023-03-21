const axios = require("axios");
async function getConstructor(request, response) {
  const API = `http://ergast.com/api/f1/current/constructorStandings.json`;
  const res = await axios.get(API);
  response.status(200).json(res.data);
}

module.exports = getConstructor;
