import axios from "axios";

const baseUrl = "http://localhost:3002/api/blogs";

const getAll = () => {
  return axios.get(baseUrl).then((result) => result.data);
};

const create = (note, token) => {
  return axios.post(baseUrl, note, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const update = (id, note) => {
  return axios.put(`${baseUrl}/${id}`, note);
};

export default { getAll, create, update };
