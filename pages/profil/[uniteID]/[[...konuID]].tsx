import React from "react";
import MyLessons from "../../../components/MyLessons";
import Navbar from "../../../components/home/Navbar";
import { useRouter } from "next/router";
import { useDers } from "../../../hooks/useDers";
import axios from "axios";
import { useCategories } from "../../../hooks/useCategories";

let response2;
export default function Profil() {
  const {
    query: { uniteID, konuID },
  } = useRouter();
  const { data, isLoading, isError, refetch } = useCategories();

  let urlProxy;

  if (konuID != null) {
    urlProxy = `/profil/${uniteID}/${konuID}`;
  }

  return (
    <div className="theme-light">
      <Navbar />
      <div className="flex min-h-screen">
        <div className="bg-blue-300 w-72">
          <ul className="inline-block">
            <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700  ">
              {" "}
              Derslerim
            </li>
            <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">
              Sınavlar
            </li>
            <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">
              Notlarım
            </li>
            <li className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700">
              Ayarlar
            </li>
          </ul>
        </div>
        <div className="ml-8 grid grid-cols-3 gap-16">
          {data &&
            konuID == null &&
            data[0].Ders.map((item) => (
              <MyLessons
                urlProxy={`/profil/${uniteID}/${item.id}`}
                DersAdi={item.DersAdi}
                complete={item.complete}
                path={`/profil/[uniteID]/[[...konuID]]`}
              />
            ))}
          {data &&
            konuID != null &&
            data[0].Ders.map(
              (element) =>
                element.id == konuID &&
                element.icerik.map((item) => (
                  <MyLessons
                    urlProxy={`/video/${konuID}/${item.id}/0`}
                    DersAdi={item.DersAdi}
                    complete={item.complete}
                    path={`/video/[uniteID]/[konuID]/[icerikID]`}
                  />
                ))
            )}
        </div>
        <h1>
          {konuID} - {uniteID}
        </h1>
      </div>
    </div>
  );
}
