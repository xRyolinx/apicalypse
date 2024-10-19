import axios from 'axios';
import { API_KEY } from '../config/env';
const ApiUrl = API_KEY

console.log(ApiUrl);
export const userLogin = (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };
  return axios.post(`${ApiUrl}/auth/login/`, data);
}


export const userRegister = (username: string, email: string, password: string) => {
  const data = {
    username,
    email,
    password,
    role: "user",
  };
  console.log(email, password);
  return axios.post(`${ApiUrl}/auth/register`, data);
}
