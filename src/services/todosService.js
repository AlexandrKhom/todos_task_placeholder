import { AXIOS } from './axiosConfig';

export const getTodos = async (_limit) => {
  const { data } = await AXIOS.get('/todos', { params: { _limit } }) || {};

  return data;
};
