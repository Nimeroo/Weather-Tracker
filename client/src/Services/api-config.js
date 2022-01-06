import axios from "axios";

const domain = "http://api.weatherapi.com/v1";
const apiKey = process.env.REACT_APP_API_KEY;

export const weatherCurrent = async (location) => {
  const weatherResp = await axios.get(
    `${domain}/current.json?key=${apiKey}q=${location}`
  );
  return weatherResp;
};

export const weatherForecast = async (location) => {
  const weatherResp = await axios.get(
    `${domain}/forecast.json?key=${apiKey}q=${location}`
  );
  return weatherResp;
};
