import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/api/Dersler`);
    return response.data;
}

export const useDers = () => {

    return useQuery(['ders'],  () => fetchData());

}
