import React from "react";
import Link, { LinkProps } from "next/link";

type Props = {
  href: LinkProps["href"];
  complete: number;
  dersAdi: string;
};

export default function MyLessons(props: Props) {
  let color = `pink`;
  if (props.complete == 100) {
    color = "green";
  }

  return (
    <div className="w-72 shadow-md rounded-lg bg-white">
      <Link href={props.href}>
        <div className="w-auto rounded-lg ">
          <img
            className="rounded-t-lg h-48  mx-auto"
            src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/A8MeEttNQWGn82dxR2Y9"
            alt="Placeholder"
          />
        </div>
      </Link>

      <div className="relative pt-1 mx-2">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${color}-600 bg-${color}-200`}
            >
              Bitirmen Gerekli
            </span>
          </div>
          <div className="text-right">
            <span
              className={`text-xs font-semibold inline-block text-${color}-600`}
            >
              %{props.complete}
            </span>
          </div>
        </div>
        <div
          className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${color}-200`}
        >
          <div
            style={{ width: `${props.complete}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
          ></div>
        </div>
      </div>
      <div className="">
        <div className="text-center text-lg font-sans font-semibold">
          <h1>{props.dersAdi}</h1>
        </div>

        <div className="flex justify-between py-2 px-2">
          <div>
            <h3>AAA</h3>
          </div>
          <div>
            <h4>VBBB₺</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
