import { useQuery } from "react-query";
import { apiClient } from "../helpers/apiClient";

export const useHooks = (endpoint: string, id?: string) => {
  var endpointUrl = endpoint;
  if (id != null) endpointUrl = `${endpoint}/${id}`;
  return useQuery(
    [`${endpoint}`, id],
    async () => (await apiClient.get(`${endpointUrl}`)).data
  );
};
