import { apiClient } from "../helpers/apiClient";
import { useQuery } from "react-query";
import React from 'react'


export async function  fetchData() {
    const response = await apiClient.get('/info');
    
    return response.data.body;
}


export const useApp = () => {
    return useQuery(['app'],() => fetchData);

}