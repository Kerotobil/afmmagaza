import axios, { AxiosResponse } from "axios";
import { useQuery, useMutation } from "react-query";
import { apiClient } from "../helpers/apiClient";
import { useStore } from "./useStore";

export function useLoginMutation() {
  const mutation = useMutation<
    AxiosResponse<any>,
    unknown,
    { username: string; password: string }
  >(async ({ username, password }) => {
    const response = await apiClient.post("auth/login", { username, password });

    const access_token = response.data?.["access_token"];
    useStore.getState().setToken(access_token);
    return response;
  });
  return mutation;
}

export const fetchAuth = (logData) => {
  const inputs = {
    username: logData.username,
    password: logData.password,
  };

  const getToken = axios
    .post("/auth/login", inputs)
    .then((res) => {
      const tokenData = res.data;
      localStorage.setItem("token", tokenData.access_token);
      console.log(tokenData);
      return tokenData;
    })
    .catch((err) => {});

  return getToken;
};

export const useAuth = (logData?: object) => {
  return useQuery(["auth", logData], () => fetchAuth(logData));
};

// export const useToken =(token)=>{
//     return useQuery(['token',token]);
// }
