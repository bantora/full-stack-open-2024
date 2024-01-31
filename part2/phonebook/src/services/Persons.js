import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

export const getPersons = () => {
  const res = axios.get(baseUrl);

  return res.then((res) => res.data);
};

export const postPersons = (param) => {
  const res = axios.post(baseUrl, param);

  return res.then((res) => res.data);
};

export const deletePersons = (id) => {
  const res = axios.delete(`${baseUrl}/${id}`);

  return res.then((res) => res.data);
};

export const putPersons = (info) => {
  const { id } = info;
  const res = axios.put(`${baseUrl}/${id}`, info);

  return res.then((res) => res.data);
};
