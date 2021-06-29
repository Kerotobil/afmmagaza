import React from "react";
import { getStaticProps } from "../yedekID";

type Props = {
  text: string;
  title: string;
};
export default function TextArea(props: Props) {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-5/6 lg:w-3/4 p-4 xl:w-2/3 mx-auto shadow-lg rounded-md bg-white">
        <h1 className="mb-10 text-3xl">{props.title}</h1>
        <p className="text-lg">{props.text}</p>
      </div>
    </div>
  );
}
