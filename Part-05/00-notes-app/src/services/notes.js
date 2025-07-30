import axios from 'axios';

const baseUrl = '/api/notes';

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

const deleteNote = (id, token) => {
  return axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default { getAll, create, update, delete: deleteNote };
