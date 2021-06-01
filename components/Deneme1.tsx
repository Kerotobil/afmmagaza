import React from 'react';


type Props = {
    kategori: string;
    urunAdi: string;
    fiyat: number;
    tur: string;
    imageUrl: string;
}


export default function Deneme1(props: Props) {


    return (

        <div>
            <div className="w-72 my-2 shadow-md rounded-lg bg-white">
                <div className="w-auto rounded-lg ">
                    <img className="rounded-t-lg h-48  mx-auto" src={props.imageUrl} alt="Placeholder" />
                </div>
                <div className="">
                    <div className="text-center text-lg font-sans font-semibold">
                        <h1>{props.kategori}</h1>
                    </div>
                    <div>
                        <h2 className="text-center">{props.urunAdi}</h2>
                    </div>
                    <div className="flex justify-between py-2 px-2">
                        <div>
                            <h3>{props.tur}</h3>
                        </div>
                        <div>
                            <h4>{props.fiyat}₺</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


