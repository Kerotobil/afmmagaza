import Link from "next/link";
import React, { useContext, useState, useCallback } from "react";

let tickColor: string = "#888";

export default function TutorialMenuSubtittle({ data, uniteID, konuID }) {
  if (data.isComplate == true) {
    tickColor = "#059669";
  }

  return (
    <Link
      href={`/video/[uniteID]/[konuID]/[id]`}
      as={`/video/${uniteID}/${konuID}/${data.id}`}
    >
      <div className=" hover:bg-gray-700 cursor-pointer">
        <ul className="text-gray-100 text-center ">
          <li className="flex text-lg ml-1">
            <div className="justify-self-start w-6 mr-2 place-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={`${tickColor}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="overflow-x-auto max-h-60 text-gray-400 ">
              <h2
                title={`${data.icerikAdi}`}
                className=" truncate "
              >{`${data.icerikAdi}`}</h2>
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
}
