import axios from 'axios';

export const Users = (token1: string) => {
    var user;

    const veri = axios.get('/users', {
        
       

    })
        .then(res => {
            user = res.data;
            console.log("başarılı")
        })
        .catch(err => {
            console.log(err)
            console.log("error")
        })

    return user;
}