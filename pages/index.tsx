import React from "react";
import Element1 from "../components/Element1";
import Deneme1 from "../components/Deneme1";
import Banner2 from "../components/Banner2";
import Element2 from "../components/Element2";
import MainComment from "../components/MainComment";
import Footer from "../components/Footer";
import MyLessons from "../components/MyLessons";
import ElementMarketing from "../components/ElementMarketing";
import { useQueryClient } from "react-query";
import Table from "../components/Table";
import { Layout } from "../components/layout";
class urun {
  kategori: string;
  urunAdi: string;
  fiyat: number;
  tur: string;
  resimUrl: string;

  constructor(a: string, b: string, c: number, d: string, e: string) {
    this.kategori = a;
    this.urunAdi = b;
    this.fiyat = c;
    this.tur = d;
    this.resimUrl = e;
  }
}

const urun1 = new urun(
  "Problemler",
  "Kesir Problemleri",
  4,
  "Kitap",
  "https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg"
);

class yorum {
  sayi: number;

  constructor(a: number) {
    this.sayi = a;
  }
}
const yorum1 = new yorum(1);
const yorum2 = new yorum(2);
const yorum3 = new yorum(3);
const yorum4 = new yorum(4);

const a = [yorum1, yorum2, yorum3, yorum4];

export default function index() {
  // const [thumb, setThumb] = useState<string>(null);
  // useEffect(() => {
  //     setThumb(
  //         youtubeThumbnail('https://www.youtube.com/watch?v=zTGYYzvgE6U&list=PLv0EY_HNM61-bp9G_zbKjlJXQWU8fGuRw&index=2')
  //     );
  // }, []);
  return (
    <Layout variant="home">
      <div className="w-full h-full bg-white  pb-20 theme-light overflow-hidden">
        <div className="space-y-10 ">
          <Banner2 />
          {/* <Element2 />
          <div className="w-full sm:w-5/6 md:w-full relative lg:w-5/6 mx-auto pt-4">
            <Element1
              imageURL={"https://www.afmmagaza.com/resman/uploads/kampanya.jpg"}
              reverse={true}
            />
          </div>
          <div className="w-full sm:w-5/6 md:w-full lg:w-5/6 mx-auto pt-4">
            <Element1
              imageURL={
                "https://www.afmmagaza.com/resman/uploads/Ekran Görüntüsü (24).png"
              }
              reverse={false}
            />
          </div>
          <div className="flex">
            <Table />
          </div> */}
          {/* <div className="flex flex-col lg:flex-row pt-32 ">
                    <div className="h-96 w-7/8 px-4 lg:w-5/6 lg:h-screen">
                        <YouTubePlayer
                            url={youtubeUrl('https://www.youtube.com/watch?v=w6r9pfJIRdE')}
                            width='100%'
                            height='90%'
                            stopOnUnmount
                            controls
                            config={{ playerVars: { autoplay: 0, rel: 0 }, }}
                        />
                    </div>
                    <div className="flex mx-auto lg:mx-0 flex-wrap lg:flex-col lg:w-1/6 border-l">
                        <LessonPageItem />
                        <LessonPageItem />
                        <LessonPageItem />
                    </div>
                </div> */}
          {/* <div className="flex animate-scroller items-center overflow-hidden w-full  ">
            {a.map((item, index) => (
              <MainComment num={item.sayi} key={index} />
            ))}
          </div>
          <div className="lg:w-5/6 flex flex-wrap justify-around mx-auto my-4">
            <Deneme1
              imageUrl={urun1.resimUrl}
              kategori={urun1.kategori}
              fiyat={urun1.fiyat}
              tur={urun1.tur}
              urunDetay={["Deneme", "345342342"]}
            />
            <Deneme1
              imageUrl={urun1.resimUrl}
              kategori={urun1.kategori}
              fiyat={urun1.fiyat}
              tur={urun1.tur}
              urunDetay={["Deneme", "345342342"]}
            />
            <Deneme1
              imageUrl={
                "https://www.afmmagaza.com/resman/uploads/Adsız tasarım (2).jpg"
              }
              kategori={urun1.kategori}
              fiyat={urun1.fiyat}
              tur={urun1.tur}
              urunDetay={[
                "Deneme",
                "345342342",
                "Deneme",
                "345342342",
                "Deneme",
                "345342342",
                "Deneme",
                "345342342",
              ]}
            />
          </div>
          <MyLessons
            href={{
              pathname: "categories/[id]",
              query: { id: 2 },
            }}
            dersAdi={"Deneme"}
            complete={55}
          />
          <div className="w-full mx-auto">
            <ElementMarketing />
          </div>
        </div>
        <Footer /> */}
        </div>
      </div>
    </Layout>
  );
}
