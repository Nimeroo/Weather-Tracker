import axios from "axios";

const domain = "https://api.weatherapi.com/v1";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherForecast = async (location) => {
  const weatherResp = await axios.get(
    `${domain}/forecast.json?key=${apiKey}&q=${location}&days=3`
  );
  return weatherResp;
};
