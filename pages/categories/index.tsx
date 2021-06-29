import React from "react";
import MyLessons from "../../components/MyLessons";
import Navbar from "../../components/Navbar";
import { useApp } from "../../hooks/useApp";
import { useCategories } from "../../hooks/useCategories";
import SectionInfo from "../../components/SectionInfo";

export default function Profil() {
  const { data } = useApp();
  const categoriesQuery = useCategories();

  return (
    <div className="theme-light">
      <div className="flex min-h-screen ">
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
            <li
              onClick={() => console.log(data)}
              className="h-8 text-xl m-4 px-4 align-middle text-center rounded-xl cursor-pointer bg-white text-indigo-600 hover:text-white hover:bg-blue-700"
            >
              Ayarlar
            </li>
          </ul>
        </div>
        <div
          className="ml-8 grid grid-cols-3 gap-16 py-2
        "
        >
          {categoriesQuery.data &&
            categoriesQuery.data.map((item, index) => (
              <MyLessons
                key={index}
                href={{
                  pathname: "categories/[id]",
                  query: { id: item.id },
                }}
                dersAdi={item.title}
                complete={55}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
