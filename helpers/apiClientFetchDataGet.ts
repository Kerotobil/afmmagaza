import { apiClient } from "./apiClient";
 

export async function  fetchDataGet(endpoint:string) {
    const response = async () => (await apiClient.get(`${endpoint}`)).data
    
    return response;
}