import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../components/home/Navbar";
import Banner2 from "../components/Banner2";
import Slider from "../components/Slider";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import Slider3 from "../components/Slider3";

export default function Denemekerem() {
  return (
    <div className="w-full h-full bg-gray-100 pb-20">
      <div className="mb-2">
        <Navbar />
      </div>
      <div className="w-full">
        <Slider>{[<Banner2 />]}</Slider>
      </div>
      <Banner2 />
    </div>
  );
}
