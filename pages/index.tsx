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
        </div>
      </div>
    </Layout>
  );
}
