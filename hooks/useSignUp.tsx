import { apiClient } from "../helpers/apiClient";
import { useMutation, useQuery } from "react-query";
import { AxiosResponse } from "axios";

// async function fetchData(signupForm: object) {
//   console.log("lannn");
//   const response = await apiClient.post("users", signupForm);
//   return response.data;
// }

// export const useSignUp = (newUser: object) => {
//   return useMutation(["users", newUser], () => fetchData(newUser));
// };

export function useSignUp() {
  const mutation = useMutation<
    AxiosResponse<any>,
    unknown,
    { name: string; email: string; password: string; role }
  >(async ({ name, email, password, role }) => {
    const response = await apiClient.post("users", {
      name,
      email,
      password,
      role,
    });

    return response;
  });
  return mutation;
}
