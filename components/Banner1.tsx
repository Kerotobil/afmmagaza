import { url } from 'node:inspector';
import React from 'react';
type Props = {
    bgİmage: string;
}

export default function Banner1(props: Props) {

    return (

        <div style={{ backgroundImage: `url(${props.bgİmage})` }} className="h-96 bg-center bg-fixed bg-gray-900" >
            <div className="bg-black bg-opacity-50 h-full px-6 py-24 bg-cover bg-no-repeat bg-center ">
                <div className="text-5xl w-full text-white text-center mx-auto ">Matematik Artık Çantada Keklik</div>
            </div>
        </div>

    );

}