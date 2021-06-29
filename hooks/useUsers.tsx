import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchUsers = (token) => {
    var veri2;

    axios.get('/users', {

        headers: {
            'Authorization': `Bearer ${token}`
        }

    })
        .then(res => {
            veri2 = res.data;
            console.log("USERS-BAŞARDIMMMM");
        })
        .catch(err => {
        });
    return veri2;
}


export const useUsers = (token) => {

    return useQuery(['auth', token], () => fetchUsers(token));
}