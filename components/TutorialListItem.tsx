import React, { Fragment, useCallback, useState } from 'react';
import TutorialListItemSubtittle from './TutorialListItemSubtitle';
import { Transition } from "@headlessui/react";

export default function TutorialListItem({ data, uniteID, konuID }) {
    const [Liste, setListe] = useState(false);

    const listeToggle = useCallback(() => {
        setListe(_ => !_);
    }, [Liste]);
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="w-5/6 text-xl text-gray-300 text-left font-josefin px-2  my-2 ">
                    <h1>{data.dersinAdi}</h1>
                </div>
                <div className=" self-center">
                    <button onClick={listeToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#888">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <Transition
                show={Liste}
                enter="transform transition duration-[700ms]"
                enterFrom="opacity-0 translate-x-96 "
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                {data.icerik.map((item, index) =>
                    <TutorialListItemSubtittle data={data.icerik[index]} uniteID={uniteID} konuID={data.id} />)}

            </Transition>

        </div>
    );


}