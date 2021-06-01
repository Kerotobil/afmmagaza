import React from 'react';
import { Link } from 'react-router-dom';

export default function NewResultListItem() {

    return (
        <div>

            <div className="container py-4 px-8  md:w-3/4 lg:w-4/6 xl:w-1/2 mx-auto">
                <div className="h-24 flex overflow-hidden py-2 px-1 shadow border-2 border-opacity-10 border-yellow-500 hover:border-opacity-100 cursor-pointer">
                    <div className="flex w-56">
                        <div className="flex justify-between ">
                            <div className="text-center text-xl flex flex-col justify-center">
                                SORU<br />
                                <span className="px-2 text-4xl font-semibold">2</span>
                            </div>

                            <div className="px-2 text-center text-xl flex flex-col justify-center divide-x-2">
                                TEST<br />
                                <span className="text-4xl font-semibold">3</span>
                            </div>
                        </div>

                        <div className="w-32 mr-2">
                            <img className="h-full w-auto object-contain" src="https://www.afmmagaza.com/resman/uploads/afm_logo_250x125.gif" />
                        </div>
                    </div>
                    <div className="grid content-around ml-2 w-full">
                        <div>
                            <h3 className="font-semibold text-base md:text-xl lg:2xl">Birinci Dereceden Bir Bilinmeyenli Denklemler</h3>
                        </div>

                        <div>
                            <span className="font-semibold text-xs md:text-sm">Birinci Dereceden Bir Bilinmeyenli Denklemler</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );


}

