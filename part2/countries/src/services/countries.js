import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

export const getAllCountries = async () => {
  const res = await axios.get(`${baseUrl}/api/all`);
  return res.data;
};

export const getCountries = async (name) => {
  const res = await axios.get(`${baseUrl}/api/name/${name}`);

  return res.data;
};
