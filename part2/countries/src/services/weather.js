import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const appid = import.meta.env.VITE_KEY;

export const getWeather = async (lat, lon) => {
  const res = await axios.get(baseUrl, {
    params: { lat, lon, appid, units: "metric" },
  });

  return res.data;
};
