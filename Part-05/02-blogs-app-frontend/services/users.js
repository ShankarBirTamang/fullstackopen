import axios from "axios";
const baseUrl = "http://localhost:3002/api/users";

const register = async (userData) => {
  const response = await axios.post(baseUrl, userData);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { register, getAll };
