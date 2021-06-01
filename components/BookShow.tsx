import React from 'react';


export default function BookShow() {

    return (
        <div className="w-64 hover:border-black">
            <div className="w-48 mx-auto">
                <img src="https://www.afmmagaza.com/resman/uploads/kimya.png" alt="" />
            </div>
            <div className="w-48 mx-auto text-gray-900 font-bold text-lg">
                <a href="">TYT Kimya Konu Özetli Soru Bankası</a>

            </div>
            <div className="text-center ">
                <a className="rounded-md border-2 px-8 text-lg text-green-500  hover:text-white hover:bg-green-500 cursor-pointer">Sepete Ekle</a>

            </div>
        </div>
    );
}