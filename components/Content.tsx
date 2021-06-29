import React from "react";

type Prop = {
  name: string;
  entry: string;
  isFirst: boolean;
  pageUrl: string;
};

export default function Content(props: Prop) {
  let marginLeft: string = "0";
  let flexReverse: string = "";
  let componentHeight: number = 24;
  let gridStart: number = 1;

  if (props.isFirst == false) {
    marginLeft = "10";
    flexReverse = "-reverse";
    componentHeight = 24;
    gridStart = 2;
  }

  return (
    <div className="max-w-md grid grid-cols-3">
      <div
        className={`border-2 w-64 md:w-96  rounded-xl pb-2 col-start-${gridStart} justify-self-start shadow-md bg-gray-300 h-auto flex flex-row${flexReverse} mt-2`}
      >
        <div className={`place-self-center`}>
          <img className={`w-12 px-1 py-1`} src={props.pageUrl} alt="" />
        </div>
        <div className="mx-4 w-full ">
          <p className="font-bold text-lg">{props.name}</p>
          <p className="place-self-center overflow-y-auto">{props.entry}</p>
        </div>
      </div>
    </div>
  );
}
