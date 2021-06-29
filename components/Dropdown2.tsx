/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
type Prop = {
  menuSubTittle?: menuSubTitle[];
  buttonTittle: string;
};

type menuSubTitle = {
  subtitle: string;
  path: string;
};

export default function Dropdown2(props: Prop) {
  const [active, setActive] = useState(false);
  const [downmenu, setDownmenu] = useState(true);
  return (
    <li className="relative text-left   ">
      {
        <>
          <div
            onMouseOver={() => setActive(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (downmenu == false) setActive(false);
              }, 300)
            }
          >
            <div className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm pl-4 py-2 bg-transparent text-sm font-medium cursor-pointer text-gray-100 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              {props.buttonTittle}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` ${
                  props.menuSubTittle != null ? `h-6 w-6` : `h-0 w-0 `
                }  mx-2`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {props.menuSubTittle != null ? (
            <Transition
              show={active}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <ul
                onMouseMove={() => {
                  clearTimeout();
                  setActive(true);
                  setDownmenu(true);
                }}
                onMouseLeave={() => {
                  setActive(false);
                  setDownmenu(false);
                }}
                className="origin-top-right absolute z-30 right-0 mt-2 min-w-min w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {props.menuSubTittle.map((item) => (
                  <Link href={item.path}>
                    <div
                      onMouseOver={() => {
                        setDownmenu(true);
                      }}
                      className="py-1 px-1"
                    >
                      <li>
                        {active ? (
                          <a
                            className={` ${
                              downmenu ? "border-l-4 border-purple-700" : ""
                            } block w-full px-4 relative cursor-pointer rounded-md py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                          >
                            {item.subtitle}
                          </a>
                        ) : (
                          <div> </div>
                        )}
                      </li>
                    </div>
                  </Link>
                ))}
              </ul>
            </Transition>
          ) : (
            <div></div>
          )}
        </>
      }
    </li>
  );
}
