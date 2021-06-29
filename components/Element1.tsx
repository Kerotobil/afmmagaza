import React from 'react';

let flexReverse:string = "flex-row";


type Props = {
    reverse: boolean,
    imageURL:string,

}



export default function Element1(props:Props) {


    if (props.reverse == true)
        flexReverse = `md:flex-row-reverse`;
    else
        flexReverse = `md:flex-row`;

    return (
        <div className="w-full pt-8">
            <div className={`flex flex-col bg-white lg:justify-around ${flexReverse}`}>

                <div className="my-auto">
                    <img src={props.imageURL} className="w-screen shadow-md" />
                </div>
                <div className="md:mt-8  xl:mt-12">
                    <div className="pt-8 md:pt-0 text-center">
                        <p className="text-4xl font-bold text-indigo-600 mx-auto ">Yeni Nesil Soru Tarzına Uygun</p>

                        <p className="mt-10 mx-auto text-xl font-sans">Görsel odaklı sorularla yeni sınav tarzına adapte ol. Yapamadığın soru çözümlerine kolayca eriş</p>

                    </div>

                </div>
            </div>

        </div>



    );
}