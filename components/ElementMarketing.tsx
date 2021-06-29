import React, { useCallback, useState } from "react";
import { Transition } from "@headlessui/react";
var display: object;

const product = [
  {
    name: "TYT Matematik Paketi",
    sayiKitap: 3,
    sayiVideo: 100,
    imageUrl:
      "https://www.afmmagaza.com/images_kucuk/f37/tyt-problemler-36-saat-video-ser_37_1.jpg",
  },
  {
    name: "KPSS Matematik Paketi",
    sayiKitap: 5,
    sayiVideo: 100,
    imageUrl:
      "https://www.afmmagaza.com/images_kucuk/f43/ayt-matematik-ilk-6-konu-video-p_43_1.jpg",
  },
  {
    name: "DGS Matematik Paketi",
    sayiKitap: 5,
    sayiVideo: 50,
    imageUrl:
      "https://www.afmmagaza.com/images_kucuk/f50/trigonometri-video-paketi-soru-b_50_1.jpg",
  },
];

display = product[0];

export default function ElementMarketing() {
  const [view, setView] = useState(product[0]);
  const viewToggle = useCallback(
    (arg: number) => {
      setView(product[arg]);
    },
    [view]
  );
  display = view;
  return (
    <div>
      <div className="w-full flex flex-row ">
        <div className="flex flex-col place-content-around">
          {product.map((item, index) => (
            <div
              key={index}
              id="item1"
              onClick={() => {
                setView(product[index]);
              }}
              className={` ${
                display === product[index]
                  ? "bg-gray-600 border-2 border-black text-gray-200"
                  : "text-gray-900"
              } text-3xl  bg-gray-100 p-2 cursor-pointer rounded-lg py-2 my-2 text-center`}
            >
              {item.name}
            </div>
          ))}
        </div>

        <div className="ml-4 space-y-3 mb-8">
          <Transition
            show={true}
            enter="transition-opacity duration-500 "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-2xl font-semibold text-gray-900 text-center">
              {view.name}
            </p>

            <div className="flex flex-row justify-around space-x-2">
              <div className="font-extrabold text-xl bg-green-300 rounded-lg px-2 py-1">
                <p>{view.sayiKitap} kitap</p>
              </div>
              <div className="font-extrabold text-xl bg-green-300 rounded-lg px-2 py-1">
                <p>{view.sayiVideo} saat video</p>
              </div>
            </div>
            <img src={view.imageUrl} className="w-56" alt="" />
          </Transition>
        </div>
      </div>
    </div>
  );
}
