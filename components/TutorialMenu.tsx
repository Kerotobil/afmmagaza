import React, { useState, useCallback, useContext } from "react";
import TutorialListItem from "./TutorialMenuTitle";
import { Transition } from "@headlessui/react";

export default function TutorialMenu({ data, uniteID, konuID, icerikID }) {
  // console.log(props.uniteAdi);
  // const videoUrl = useContext(videoContext);
  const [tutorialList, setTutorialList] = useState(true);

  const tutorialListToggle = useCallback(() => {
    setTutorialList((_) => !_);
  }, [tutorialList]);
  let konuSira: number;
  let icerikSira: number;
  const konuIndex = data.dersMenu.map((element, index) => {
    if (element.id == konuID) {
      konuSira = index;
    }
  });
  const siraIndex = data.dersMenu[konuSira].icerik.map((element, index) => {
    if (element.id == icerikID) {
      icerikSira = index;
    }
  });

  return (
    <div>
      <Transition
        show={tutorialList}
        enter=" duration-[1000ms]"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave=" duration-[500ms]"
        leaveFrom="-translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="w-80 bg-gray-800 overflow-x-hidden overflow-y-auto h-full absolute z-10 top-0 right-0 md:relative  md:z-10">
          <div className="container border-2 flex">
            <div className="w-11/12 mt-2 text-gray-300 text-3xl font-bold font-josefin text-center">
              <h1>{data.uniteAdi}</h1>
            </div>
            <div className="absolute z-10 top-2 right-1">
              <button
                className="border border-white  rounded-md"
                onClick={tutorialListToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-12 w-11/12 mx-auto text-white text-xl font-semibold font-serif text-center">
            <h1>Konular</h1>
          </div>

          <div className=" divide-y-2 divide-gray-400 h-screen overflow-y-auto">
            {data.dersMenu.map((item, index) => (
              <TutorialListItem
                data={data.dersMenu[index]}
                uniteID={uniteID}
                konuID={konuID}
              />
            ))}
          </div>
        </div>
      </Transition>

      <Transition
        show={tutorialList != true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute  right-5">
          <button className="" onClick={tutorialListToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Transition>
    </div>
  );
}
