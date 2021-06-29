import React from "react";
import NavbarPrivate from "../../../../components/NavbarPrivate";
import TutorialMenu from "../../../../components/TutorialMenu";
import Content from "../../../../components/Content";
import YouTubePlayer from "react-player/youtube";

import { useRouter } from "next/router";
import { useVideo } from "../../../../hooks/useVideo";

export default function Sayfa() {
  const {
    query: { uniteID, konuID, icerikID },
  } = useRouter();

  // const data = await getPostAndMorePosts(params.slug, preview);
  // const content = await markdownToHtml(data?.posts[0]?.content || '');
  // ...
  // useXXXQuery istekleri buraya.
  // Örnek:
  // useUniteler
  // useKullaniciProfili
  // useOnerilenDersler
  // useHavaDurumu
  // ...

  // const response = axios.get('http://localhost:3000/api/Genel').then(function (response) {
  //   // handle success
  //   console.log(response);
  // })

  const { data, isLoading, isError, refetch } = useVideo(`${uniteID}`, `Genel`);
  console.log(data);
  return (
    <div className="h-screen  ">
      <div className=" ">
        <NavbarPrivate />
      </div>
      {isError && <div> "Yükleniyor" </div>}
      {data && (
        <div className="flex bg-gray-200">
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
                <iframe
                  src="https://iframe.videodelivery.net/eyJhbGciOiJSUzI1NiIsImtpZCI6ImNkYzkzNTk4MmY4MDc1ZjJlZjk2MTA2ZDg1ZmNkODM4In0.eyJraWQiOiJjZGM5MzU5ODJmODA3NWYyZWY5NjEwNmQ4NWZjZDgzOCIsImV4cCI6IjE2MjE4ODk2NTciLCJuYmYiOiIxNjIxODgyNDU3In0.iHGMvwOh2-SuqUG7kp2GeLXyKvMavP-I2rYCni9odNwms7imW429bM2tKs3G9INms8gSc7fzm8hNEYWOhGHWRBaaCs3U9H4DRWaFOvn0sJWLBitGuF_YaZM5O6fqJPTAwhgFKdikyk9zVzHrIJ0PfBL0NsTgwDxLkJjEAEULQJpiQU1DNm0w5ctasdbw77YtDwdZ01g924Dm6jIsWolW0Ic0AevCLyVdg501Ki9hSF7kYST0egcll47jmoMMni7ujQCJI1XEAOas32DdjnMvU8vXrYbaHk1m1oXlm319rDYghOHed9kr293KM7ivtZNlhYceSzOpyAmqNFS7mearyQ"
                  height="720"
                  width="1280"
                  allow=" autoplay; picture-in-picture;"
                ></iframe>

                {/* <YouTubePlayer
                  url={data.dersMenu[0].icerik[1].icerikUrl}
                  width="100%"
                  height=""
                  stopOnUnmount
                  controls
                  config={{ playerVars: { autoplay: 0, rel: 0 } }}
                /> */}
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
          <div className="min-h-full">
            <TutorialMenu
              data={data}
              uniteID={uniteID}
              konuID={konuID}
              icerikID={icerikID}
            />
          </div>
        </div>
      )}{" "}
    </div>
  );
}
