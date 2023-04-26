import axios from 'axios';

axios.defaults.baseURL = 'https://6446537a0431e885f00eee1a.mockapi.io/';

export const usersGet = async () => {
  const data = await axios.get(`/users`);
  return data;
};
export const userId = async ({ id, body }) => {
  const data = await axios.put(`/users/${id}`, body);
  return data;
};
