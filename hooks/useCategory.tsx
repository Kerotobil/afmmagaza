import { useQuery } from "react-query";
import { apiClient } from "../helpers/apiClient";

export const useCategory = (id: string) =>
  useQuery(
    ["category", id],
    async () => (await apiClient.get(`categories/${id}`)).data
  );
