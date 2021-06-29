import axios from 'axios';
import { useStore } from '../hooks/useStore';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiClient.interceptors.request.use(function(config) {
  
  const access_token = useStore.getState().access_token;
  if (access_token) {
    config.headers[`Authorization: Bearer ${access_token}`];
  }

  return config;
});

apiClient.interceptors.response.use(function(response){

  const access_token = response.data?.access_token;
  if (access_token) {
    useStore.getState().setToken(access_token);
  }
  return response;
});
