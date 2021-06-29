import React from "react";

export default function Element2() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto">
        <h1 className="text-center font-bold text-5xl mb-16">Neden KOZ</h1>
      </div>
      <div className="flex flex-col lg:flex-row place-items-center justify-center">
        <div className=" flex flex-col md:flex-row lg:flex-col w-96 lg:my-0">
          <img
            className="h-20 mx-auto"
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/book-icon.png"
            alt=""
          />
          <div>
            <h1 className="text-3xl text-center font-bold text-gray-900">
              Kaliteli
            </h1>
            <p className="px-10 text-center text-lg ">
              Ders videoları dışında sanal ortamlarımızda soru çözüm,
              paylaşımlar, taktikler, soru cevaplar
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col w-96 my-6 lg:my-0">
          <img
            className="h-20 mx-auto"
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/book-icon.png"
            alt=""
          />
          <div>
            <h1 className="text-3xl text-center font-bold text-gray-900">
              Odaklı
            </h1>
            <p className="px-10 text-center text-lg">
              Ders videoları dışında sanal ortamlarımızda soru çözüm,
              paylaşımlar, taktikler, soru cevaplar
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col w-96 my-6 lg:my-0">
          <img
            className="h-20 mx-auto"
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/book-icon.png"
            alt=""
          />
          <div>
            <h1 className="text-3xl text-center font-bold text-gray-900">
              Zorlayıcı
            </h1>
            <p className="px-10 text-center text-lg">
              Ders videoları dışında sanal ortamlarımızda soru çözüm,
              paylaşımlar, taktikler, soru cevaplar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
