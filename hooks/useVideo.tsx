import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchData = async (uniteID:string, apiGet:string) => {
    const response = await axios.get(`http://localhost:3000/api/${apiGet}?uniteID=${uniteID}`);
    return response.data;
}

export const useVideo = (uniteID:string, api:string) => {

    return useQuery(['urun', uniteID, api],  () => fetchData(uniteID, api));

}
