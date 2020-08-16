import openweather from "../api/openweather";
import { apiKey } from "../config";

export const FETCH_WEATHER = "FETCH_WEATHER";

const fetchWeather = (city) => {
  const response = openweather.get(`/forecast?appid=${apiKey}&q=${city},us`);
  console.log("response", response);
  return {
    type: FETCH_WEATHER,
    payload: response,
  };
};

export { fetchWeather };
