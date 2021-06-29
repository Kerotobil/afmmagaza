import { useCallback, useEffect, useState } from 'react';

export default function useToken2 (){

    const [token, setToken] = useState<string>(null);



    useEffect(() => {
        //İlk renderda localStorage'den token al
        setToken(localStorage.getItem('token'));
    }, [])


    useEffect(() => {
        //token değiştiğinde localStorage'e ekle 
        localStorage.setItem('token', token);
    }, [token])

    return { token, setToken };
}

