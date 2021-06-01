import React, { useState, useCallback, useContext } from 'react';
import YouTubePlayer from 'react-player/youtube';
import Content from './Content';
import TutorialListItem from './TutorialListItem';



export default function TutorialList({data,uniteID,konuID,icerikID}) {
    // console.log(props.uniteAdi);
    // const videoUrl = useContext(videoContext);
    const [tutorialList, setTutorialList] = useState(true);

    const tutorialListToggle = useCallback(() => {
        setTutorialList(_ => !_);
    }, [tutorialList]);
    let konuSira:number;
    let icerikSira:number;
    const konuIndex=data.dersMenu.map((element,index) => {if(element.id==konuID){konuSira=index}});
    const siraIndex=data.dersMenu[konuSira].icerik.map((element,index) => {if(element.id==icerikID){icerikSira=index}});
    
    return (
        <div className="bg-gray-400">

            <div className="flex flex-row justify-between relative">
                <div className=" px-8 w-full ">
                    <div>
                        <div className="text-2xl text-gray-700 my-4 text-center font-mono">
                            {/* <p> {props.uniteAdi} - {props[0].dersMenu[0].dersinAdi}</p> */}
                            <p> {data.uniteAdi} - {data.dersMenu[konuSira].dersinAdi}</p>
                        </div>
                        <div className="aspect-w-16 aspect-h-9" >
                            
                                <YouTubePlayer
                                    url={data.dersMenu[konuSira].icerik[icerikSira].icerikUrl}
                                    width='100%'
                                    height=''
                                    stopOnUnmount
                                    controls
                                    config={{ playerVars: { autoplay: 0, rel: 0 }, }}
                                />
                           
                        </div>
                    </div>
                    <div className="container">
                        <div className="ml-10 mt-6 text-xl">
                            <h1>Soru&Cevap</h1>
                        </div>
                    </div>

                    <div className="container">
                        <Content pageUrl="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png" name="Kerem Gümüş" entry="Hocam bu soruda neden böyle yaptık" isFirst={true} />
                        <Content pageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumQI31YRvzLrYdZE5g8YK6X7ki0pJ-8Y9KQ&usqp=CAU" name="Mahmut Hoca" entry="Dikkatli oku   " isFirst={false} />
                        <Content pageUrl="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png" name="Kerem Gümüş" entry="Sağolun hocam" isFirst={true} />
                        <Content pageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumQI31YRvzLrYdZE5g8YK6X7ki0pJ-8Y9KQ&usqp=CAU" name="Mahmut Hoca" entry="Ne demek" isFirst={false} />
                    </div>

                </div>

                {tutorialList
                    ? <div className="w-96 bg-gray-800 absolute z-10 top-0 right-0 md:relative  md:z-10">
                        <div className="container border-2 flex">
                            <div className="w-11/12 mt-2 text-gray-300 text-3xl font-bold font-josefin text-center">
                                <h1>{data.uniteAdi}</h1>
                            </div>
                            <div className=" absolute z-10 top-0 right-0">
                                <button className="border border-white bg-gray-400" onClick={tutorialListToggle} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="h-12 w-11/12 mx-auto text-white text-xl font-semibold font-serif text-center">
                            <h1>Konular</h1>
                        </div>



                        <div className="md:overscroll-y-auto divide-y-2">
                            {data.dersMenu.map( (item,index) =>
                            <TutorialListItem data={data.dersMenu[index]}  uniteID={uniteID} konuID={konuID}
                            />
                            )}
                            </div>
                    </div>
                    : <div className="">
                        <button className="" onClick={tutorialListToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                }



            </div>


        </div>


    );
}

