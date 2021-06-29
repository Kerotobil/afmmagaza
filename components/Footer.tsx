import React from 'react';

export default function Footer() {
    return (
        <div className="h-60 px-4 bg-pink-700">
            <div className="flex">
                <div className="mt-4 w-72 text-xl text-white">
                    <img src="https://www.afmmagaza.com/custom/header_left_1_0.png?rn1623067374" alt="" className="w-32 " />
                    <p className="text-gray-200  text-3xl mt-2">Uzaktan eğitim ilgisiz olmaz!</p>
                        
                </div>
                <div className="ml-8">
                        <ul>
                        <li>Hakkımızda</li>
                        <li>Sıkça Sorulan Sorular</li>
                        <li></li>
                    </ul>
                    </div>
            </div>

        </div>
    );
}