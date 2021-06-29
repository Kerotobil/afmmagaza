import axios from 'axios';
import React from 'react'


export const onAuth=async (logData) => {



    const inputs = {

        username: logData.username,
        password: logData.password
    };

   const veri= axios.post('/auth/login',  inputs )
        .then(res => {
            localStorage.setItem('token',res.data.access_token)
        })
        .catch(err => {
            console.log(err)
        });

        return veri;
}