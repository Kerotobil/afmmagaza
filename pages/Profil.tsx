import React from 'react'
import MyLessons from '../components/MyLessons';
import Navbar from '../components/Navbar';
    
export default function Profil(){


    return(
        <div>
            <Navbar />
            <div className="flex min-h-screen">
                <div className="bg-blue-300 w-72">
                    <ul className="inline-block">
                        <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700  "> Derslerim</li>
                        <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">Sınavlar</li>
                        <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">Notlarım</li>
                        <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">Ayarlar</li>
                    </ul>
                     

                </div>

                <div className="ml-8 grid grid-cols-3 gap-16">
                <MyLessons urlProxy={`/profil/0`} DersAdi={`Oran Orantı`} complete={55} path={`/profil/[uniteID]/[[...konuID]]`} />
                    
                </div>


            </div>
        </div>

    );
}