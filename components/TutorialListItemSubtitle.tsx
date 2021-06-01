import Link from 'next/link';
import React,{useContext, useState, useCallback} from 'react';

let tickColor:string="888";



export default function TutorialListItemSubtittle({data,uniteID,konuID}) {

    if(data.isComplate==true){
    tickColor="#059669";}
    
    
    return (
        
        <Link href={`/video/[uniteID]/[konuID]/[id]`} as={`/video/${uniteID}/${konuID}/${data.id}`} >
        <button>
        <div  className="transition w-72 mx-auto mb-2" >
            <ul className="text-black text-center divide-x ">
                <li className="grid grid-cols-7 bg-gray-200 rounded-lg hover:bg-green-200 text-lg ml-2">
                    <div className="justify-self-center place-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="white" viewBox="0 0 24 24" stroke={`${tickColor}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="col-start-2 col-span-5 max-h-60 ">
                        <h2 className=" truncate ">{`${data.icerikAdi}`}</h2>
                    </div>
                </li>
                
            </ul>
        </div>
        </button>
        </Link>
    );
}
