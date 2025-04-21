import { axiosClient } from "../../../redux/axios";

export const ClientApi = {
  getCsrfToken: async () => {
    return await axiosClient.get('/sanctum/csrf-cookie');
  },
  login: async (email, password) => {
    return await axiosClient.post('/login', { "email": email, "password": password });
  },
  logout: async () => {
    return await axiosClient.post('/logout');
  },
  getUser: async () => {
    return await axiosClient.get('/api/user');
  },
  registerUser: async (formData) => { 
    return await axiosClient.post('/register', formData);
  }
}
