import React, { useCallback, useEffect, useMemo, useState } from "react";
import { youtubeThumbnail } from "../helpers/youtube";
import YouTubePlayer from "react-player/youtube";
import NewResultListItem from "../components/NewResultListItem";
import SearchResultListItem from "../components/SearchResultListItem";
import LessonPageItem from "../components/LessonPageItem";
import { youtubeUrl } from "../helpers/youtube";
import Navbar from "../components/home/Navbar";

let videoUrl: Array<string> = [
  "https://www.youtube.com/watch?v=qN4YzPt6eCc&t=1761s",
  "https://www.youtube.com/watch?v=JOuZxw3gfts",
  "https://www.youtube.com/watch?v=EOMFvDQDh00&t=207s",
];

export default function Denemekerem() {
  const [modalShow, setModalShow] = useState(false);
  const modalToggle = useCallback(() => {
    console.log("Modal gösterildi", modalShow);
    setModalShow((_) => !_);
  }, [modalShow]);

  const [thumb, setThumb] = useState<string>(null);
  useEffect(() => {
    setThumb(
      youtubeThumbnail(
        "https://www.youtube.com/watch?v=zTGYYzvgE6U&list=PLv0EY_HNM61-bp9G_zbKjlJXQWU8fGuRw&index=2"
      )
    );
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 ">
      <Navbar />

      <div className="flex flex-col lg:flex-row pt-2 h-screen lg:justify-around ">
        <div className="h-96 w-7/8 mx-8 lg:w-5/6 lg:h-full">
          <YouTubePlayer
            url={youtubeUrl("https://www.youtube.com/watch?v=w6r9pfJIRdE")}
            width="100%"
            height="90%"
            stopOnUnmount
            controls
            config={{ playerVars: { autoplay: 0, rel: 0 } }}
          />
        </div>
        <div className="flex mx-2 flex-wrap lg:flex-col lg:w-1/6 px-2">
          <LessonPageItem />
          <LessonPageItem />
          <LessonPageItem />
          <LessonPageItem />
          <LessonPageItem />
        </div>
      </div>
    </div>
  );
}
