const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  apiKey: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  baseUrl: process.env.REACT_APP_BASEURL,
};
