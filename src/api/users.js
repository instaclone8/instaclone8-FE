import api from '../axios/api';

export const userSignup = async (userInfo) => {
  const data = await api.post(`/api/user/signup`, userInfo)
  console.log(data);
  return data
};