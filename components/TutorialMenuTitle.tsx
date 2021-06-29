import React, { Fragment, useCallback, useState } from "react";
import TutorialListItemSubtittle from "./TutorialMenuSubtittle";
import { Transition } from "@headlessui/react";

export default function TutorialMenuTitle({ data, uniteID, konuID }) {
  const [Liste, setListe] = useState(false);

  const listeToggle = useCallback(() => {
    setListe((_) => !_);
  }, [Liste]);
  return (
    <div>
      <div className="flex flex-row justify-between mr-1">
        <div className="w-full text-2xl text-gray-50 text-left font-josefin px-2  my-2 ">
          <h1>{data.dersinAdi}</h1>
        </div>
        <div className=" self-center">
          <button onClick={listeToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${Liste ? `-rotate-0` : `-rotate-90`}  h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#888"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full">
        <Transition
          show={Liste}
          enter="transform transition duration-[700ms]"
          enterFrom="opacity-0 translate-x-96 "
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="space-y-2 mb-2">
            {data.icerik.map((item, index) => (
              <TutorialListItemSubtittle
                data={data.icerik[index]}
                uniteID={uniteID}
                konuID={data.id}
              />
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
}
