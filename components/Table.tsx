import React from "react";

const veriler = [
  { title: "ahmet", number: 2, id: 4 },
  { title: "ahmet", number: 2, id: 4 },
  { title: "ahmet", number: 2, id: 4 },
];

export default function Table() {
  return (
    <div className="mx-auto ">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-2xl border-black border-b-2">
            <th className="w-48 "></th>
            <th className="w-48 border-t-2">Author</th>
            <th className="w-48">Views</th>
            <th className="w-48">Author</th>
            <th className="w-48">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle h-12 font-bold text-lg text-left">
            Ders İçerikleri
          </tr>
          <tr className="text-xl text-center">
            <td className="text-left">Kitap Dahil mi?</td>
            <td className="">Adam</td>
            <td className="">112</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
