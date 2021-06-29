import React from "react";
import Navbar from "../components/Navbar";
import TutorialMenu from "../components/TutorialMenu";
import { useVideo } from "../hooks/useVideo";
import Content from "./../components/Content";
import YouTubePlayer from "react-player/youtube";

export default function TutorialLesson2() {
  // uniteAdi={urunler.unite} dersAdi={urunler.ders} videoUrl={urunler.video} icerikAdi={urunler.icerik} isComplate='true'
  const { data, isLoading, isError, refetch } = useVideo(`0`, `Genel`);
  return (
    <div className="">
      <Navbar />
      {data && (
        <div className=" px-8 w-full h-screen overflow-y-auto">
          <div className="w-11/12 mx-auto">
            <div className="text-2xl flex text-gray-700 my-4 text-left font-josefin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                {data.uniteAdi} - {data.dersMenu[0].dersinAdi}
              </p>
            </div>
            <div className=" aspect-w-16 aspect-h-9">
              <YouTubePlayer
                url={data.dersMenu[0].icerik[1].icerikUrl}
                width="100%"
                height=""
                stopOnUnmount
                controls
                config={{ playerVars: { autoplay: 0, rel: 0 } }}
              />
            </div>
          </div>
          <div className="container">
            <div className="ml-10 mt-6 text-xl">
              <h1>Soru&Cevap</h1>
            </div>
          </div>

          <div className="w-full">
            <Content
              pageUrl="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png"
              name="Kerem Gümüş"
              entry="Hocam bu soruda neden böyle yaptık"
              isFirst={true}
            />
            <Content
              pageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumQI31YRvzLrYdZE5g8YK6X7ki0pJ-8Y9KQ&usqp=CAU"
              name="Mahmut Hoca"
              entry="Dikkatli oku   "
              isFirst={false}
            />
            <Content
              pageUrl="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png"
              name="Kerem Gümüş"
              entry="Sağolun hocam"
              isFirst={true}
            />
            <Content
              pageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumQI31YRvzLrYdZE5g8YK6X7ki0pJ-8Y9KQ&usqp=CAU"
              name="Mahmut Hoca"
              entry="Ne demek"
              isFirst={false}
            />
          </div>
        </div>
      )}
      {data && <TutorialMenu data={data} uniteID={0} konuID={0} icerikID={0} />}
    </div>
  );
}
