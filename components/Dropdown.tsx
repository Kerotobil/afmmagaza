/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
type Prop = {
  menuSubTittle: menuSubTitle[];
  buttonTittle: string;
};

type menuSubTitle = {
  subtitle: string;
  path: string;
};

export default function Example(props: Prop) {
  return (
    <li className="">
      <Menu as="div" className="relative text-left z-20 ">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white shadow-sm pl-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                {props.buttonTittle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-2"
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
              </Menu.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 min-w-min w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {/* Link komponentinden dolayı cursor pointer ekledik.SOR */}

                {props.menuSubTittle.map((item) => (
                  <Link href={item.path}>
                    <div className="py-1 px-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active
                                ? " bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block w-full px-4 cursor-pointer rounded-md py-2 text-xl`}
                          >
                            {item.subtitle}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Link>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </li>
  );
}
