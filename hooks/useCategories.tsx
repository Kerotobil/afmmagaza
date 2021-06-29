import { apiClient } from "../helpers/apiClient";
import { useQuery } from "react-query";


 async function fetchData() {
    const response = await apiClient.get('categories');
    return response.data;
}


export const useCategories = () =>{
    return useQuery(['categories'], fetchData);

}