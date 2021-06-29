import React from "react";

type Props = {
  kategori: string;
  urunDetay: Array<string>;
  fiyat: number;
  tur: string;
  imageUrl: string;
};

export default function Deneme1(props: Props) {
  return (
    <div>
      <div className="w-96 h-100 my-2 shadow-md rounded-lg bg-white">
        <div className="w-auto rounded-lg aspect-w-16 aspect-h-9">
          <img
            className="rounded-t-lg "
            src={props.imageUrl}
            alt="Placeholder"
          />
        </div>
        <div className="p-2 h-full flex flex-col items-stretch">
          <div className="text-left text-3xl font-sans font-bold">
            <h1>{props.kategori}</h1>
          </div>
          <div className="h-48 overflow-y-auto">
            {props.urunDetay.map((item, index) => (
              <li className="text-left text-lg mt-2 list-disc">{item}</li>
            ))}
          </div>
          <div className=" flex justify-between py-2 px-2">
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
