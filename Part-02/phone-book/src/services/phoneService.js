import axios from "axios";

const baseUrl = "api/persons";

const getAll = () => {
  return axios.get(baseUrl).then((result) => result.data);
};

const create = (person) => {
  return axios.post(baseUrl, person);
};

const update = (id, person) => {
  return axios.put(`${baseUrl}/${id}`, person);
};

const deletePersons = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deletePersons };
