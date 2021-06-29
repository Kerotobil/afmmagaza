import React, { useCallback, useState } from "react";
import { Transition } from "@headlessui/react";
import ProdutInfoDetails from "./ProductInfoDetails";
import DisclosureElement from "./Disclosure";
import MyLessons from "./MyLessons";
var display;

const veriler = ["Örnek Video-1", "Örnek Video-2", "Örnek Video-3"];

const product = [
  <div className="">
    <ProdutInfoDetails />
  </div>,
  <div className="flex flex-row flex-wrap justify-center my-4">
    {veriler.map((item, index) => (
      <div className="mx-4 mb-4">
        <MyLessons
          key={index}
          href={{
            pathname: "categories/[id]",
            query: { id: index },
          }}
          dersAdi={item}
          complete={55}
        />
      </div>
    ))}
  </div>,
  <ProdutInfoDetails />,
];

export default function ElementMarketing() {
  const [view, setView] = useState(product[0]);
  const viewToggle = useCallback(
    (arg: number) => {
      setView(product[arg]);
    },
    [view]
  );
  return (
    <div className=" mx-auto  ">
      <div className="grid grid-cols-3 gap-7 md:gap-24 ">
        {product.map((item, index) => (
          <div
            key={index}
            id="item1"
            onClick={() => {
              setView(product[index]);
            }}
            className={` ${
              view === product[index]
                ? "border-b-4 border-black "
                : "text-gray-900"
            } text-2xl  p-2 cursor-pointer rounded-t-lg py-2 my-2 text-center`}
          >
            <p>Detay Bilgi-{index}</p>
          </div>
        ))}
      </div>

      <Transition
        show={true}
        enter="transition-opacity duration-150 "
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className=" bg-white rounded-md shadow-lg p-2 my-2">{view}</div>
      </Transition>
    </div>
  );
}

{
  /* <div className="ml-4  mx-auto space-y-3 mb-8 border-4">
            <p className="text-2xl font-semibold text-gray-900 text-center">
              {view.name}
            </p>

            <div className="flex flex-row justify-around space-x-2 ">
              <div className="font-extrabold text-xl bg-green-300 rounded-lg px-2 py-1">
                <p>{view.sayiKitap} kitap</p>
              </div>
              <div className="font-extrabold text-xl bg-green-300 rounded-lg px-2 py-1">
                <p>{view.sayiVideo} saat video</p>
              </div>
            </div>
            <img src={view.imageUrl} className="w-56 mx-auto" alt="" />
          </div> */
}
