import React from "react";

export default function ProdutInfo() {
  return (
    <div className="mt-10 ">
      <div className="flex flex-col md:flex-row  mx-auto shadow-lg rounded-md bg-white">
        <div className="my-auto mx-auto">
          <img
            src="https://www.afmmagaza.com/resman/uploads/Adsız tasarım (27).jpg"
            alt=""
            className=" mx-auto w-full p-4 aspect-w-4 aspect-h-4"
          />
        </div>
        <div className="ml-4 md:mx-auto my-auto pb-4 md:my-10 pr-3">
          <h1 className="text-3xl lg:text-4xl text-gray-800 font-bold">
            TYT Matematik Paketi
          </h1>
          <div>
            <p className=" my-4 overflow-visible w-full lg:w-96 text-black text-xl">
              Trigonometri paketimizde canlı dersler, özel formüller, canlı
              dersler, ve soru çözüm gruplarıyla sınava hazırlanın.
            </p>
          </div>
          <div className="bg-blue-200 rounded-lg shadow px-8 py-2 mt-10">
            <p className="text-md font-semibold">
              Ders kitapların aynı gün kargoda!
            </p>
            <div className="flex flex-row ">
              <div>
                <p className="line-through text-yellow-900 text-xl whitespace-nowrap">
                  449 ₺
                </p>
                <p className="text-yellow-600  text-4xl font-semibold whitespace-nowrap ">
                  199 ₺
                </p>
              </div>
              <button className="whitespace-nowrap ml-8 mx-auto transform hover:scale-110 ease-linear duration-100">
                <a
                  className="py-1 px-4 rounded-md shadow-lg font-semibold bg-green-600 text-lg text-white border border-transparent hover:border-white"
                  href="#"
                >
                  Hemen Satın Al
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
