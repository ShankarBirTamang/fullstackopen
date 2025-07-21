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
const like = async (id, blogData) => {
  const result = await axios.put(`${baseUrl}/${id}`, blogData);
  return result.data;
};

export default { getAll, create, update, like };
