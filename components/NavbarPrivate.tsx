import React from "react";
import NavbarList from "./NavbarList";
import Dropdown2 from "./Dropdown2";
export default function NavbarPrivate() {
  return (
    <div className="bg-gray-800 ">
      <div className="mx-8 h-20 flex flex-row rounded-lg justify-around ">
        <div className="my-auto justify-self- ">
          <img
            src="https://www.afmmagaza.com/resman/uploads/AFM-Logo-transparan1.png"
            alt=""
            className="h-20 py-2"
          />
        </div>
        <div className="my-auto">
          <ul className="flex md:flex flex-row place-items-center space-x-2">
            <Dropdown2 buttonTittle={"Dersler"} />
            <Dropdown2 buttonTittle={"Canlı Dersler"} />
            <Dropdown2 buttonTittle={"Ödevlerim"} />
            <Dropdown2 buttonTittle={"Sınavlar"} />
          </ul>
        </div>
      </div>
    </div>
  );
}
