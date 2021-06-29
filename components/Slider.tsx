import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function Slider(props) {
  var images = props.children;

  const [bindex, setBindex] = useState(0);

  const slideLeft = () => {
    const nextIndex = bindex + 1;

    if (nextIndex > images.length - 1) {
      setBindex(0);
    } else {
      setBindex(nextIndex);
    }
  };

  setTimeout(slideLeft, 6000);

  return (
    <div className="flex w-full relative justify-center overflow-hidden h-screen">
      {images.map((item, index) => (
        <div className="absolute mx-auto w-full">
          <Transition
            show={index == bindex}
            enter=" duration-[1000ms]"
            enterFrom="translate-x-[400%]"
            enterTo="translate-x-0"
            leave=" duration-[1000ms]"
            leaveFrom="-translate-x-0"
            leaveTo="translate-x-[-200%]"
          >
            {item}
          </Transition>
        </div>
      ))}
    </div>
  );
}
