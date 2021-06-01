import React from 'react';


type Props = {
  children?: React.ReactNode,
  data: Data,
};

type Data = {
  thumbnail: string,
  title: string,
  questionNumber: number,
  pageNumber: number,
  testTitle?: string,
};

export default function SearchResultListItem(props: Props) {

  const { data } = props;

  return (
    <div className="h-24 rounded overflow-hidden flex space-x-2 p-2 shadow border-2 border-primary-200 hover:border-primary-500 cursor-pointer">

      <div className="w-24 text-center text-xl flex flex-col justify-center">
        SORU<br />
        <span className="text-4xl font-semibold">{data.questionNumber}</span>
      </div>

      <div className="w-40 h-full flex-shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${data.thumbnail})` }}></div>


      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold flex-1">{data.title}</h3>

        <div className="text-sm flex h-5 space-x-2">

          <div className="flex-0">
            <span className="mr-1">Sayfa:</span>
            <span className="font-semibold">
              {data.pageNumber}
            </span>
          </div>
    
          <div className="flex-1 truncate w-1">
            <span className="mr-1">Test:</span>
            <span className="font-semibold">
              {data.title}
            </span>

          </div>

        </div>
      </div>
        Array 
    </div>
  );
}
