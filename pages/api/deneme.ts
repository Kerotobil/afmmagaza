import axios from "axios";


export const fetchData = async () => {
    const response = await axios.post('https://f615d122641f.eu.ngrok.io/auth/login?', {
        username: 'foo@bar.baz',
        password: '123123'
      })
    return response;
}