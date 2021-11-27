import React from "react";
import Link from "next/link";

type Props = {
  title: React.ReactNode;
  url: string;
};

export default function NavbarList(props: Props) {
  return (
    <li className="p-4 ">
      <Link href={props.url}>
        <a
          className="inline-flex justify-center rounded-md border border-gray-300 bg-white shadow-sm px-2 py-2 text-sm font-medium 
         hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 text-gray-700 cursor-pointer hover:text-gray-900"
        >
          {props.title}
        </a>
      </Link>
    </li>
  );
}
