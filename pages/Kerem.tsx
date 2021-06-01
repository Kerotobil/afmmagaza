import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { youtubeThumbnail } from '../helpers/youtube';

import LessonPageItem from '../components/LessonPageItem';
// import { youtubeUrl } from '../helpers/youtube';
import Navbar from '../components/Navbar';
import Element1 from '../components/Element1';
import Banner1 from '../components/Banner1';
import Deneme1 from '../components/Deneme1';
import BookShow from '../components/BookShow';
import BookVideoShow from '../components/BookVideoShow';
import OrnekTemplate from '../components/OrnekTemplate';
import {Dersler} from '../Dersler.json'

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
const urun1 = new urun("Problemler", "Kesir Problemleri", 4, "Kitap", "https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg");
const urun2 = new urun("Trigonometri", "Toplam Fark Dormülleri", 4, "Kitap", "https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg");
const urun3 = new urun("Problemler", "Kesir Problemleri", 4, "Kitap", "https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg");
const urun4 = new urun("Problemler", "Kesir Problemleri", 4, "Kitap", "https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg");


export default function Denemekerem() {

    const [modalShow, setModalShow] = useState(false);
    const modalToggle = useCallback(() => {
        console.log("Modal gösterildi", modalShow);
        setModalShow(_ => !_);
    }, [modalShow]);


    // const [thumb, setThumb] = useState<string>(null);
    // useEffect(() => {
    //     setThumb(
    //         youtubeThumbnail('https://www.youtube.com/watch?v=zTGYYzvgE6U&list=PLv0EY_HNM61-bp9G_zbKjlJXQWU8fGuRw&index=2')
    //     );
    // }, []);

    return (
        <OrnekTemplate>
            <div className="w-full h-full bg-gray-100 pb-20">
                <div>
                    <Navbar />

                    <Banner1 bgİmage="https://www.afmmagaza.com/resman/uploads/books-2158773_1920.jpg" />


                    <div className="w-full sm:w-5/6 md:w-full lg:w-5/6 mx-auto pt-4">
                        <Element1 reverse={true} />
                    </div>
                    <div className="w-full sm:w-5/6 md:w-full lg:w-5/6 mx-auto pt-4">
                        <Element1 reverse={false} />
                    </div>
                </div>
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
                <div className="lg:w-5/6 flex flex-wrap justify-around mx-auto my-4">
                    <Deneme1 imageUrl={urun1.resimUrl} kategori={urun1.kategori} fiyat={urun1.fiyat} tur={urun1.tur} urunAdi={urun1.urunAdi} />
                                   </div>
                <div className="flex place-content-center">
                    <BookShow />

                </div>


                <BookVideoShow imageLink="https://www.afmmagaza.com/resman/uploads/kimya.png" />

                <List>
                    <ListItem>
                        <ListItem>Hebelekddssd</ListItem>
                    </ListItem>
                    <div className="deneme">{Dersler[0]}</div>
                    
                </List>
            </div>
        </OrnekTemplate>
    );
}



function List(props) {
    return (
        <div>
            {props.children}
        </div>
    );

}

function ListItem(props) {
    return (
        <h3>{props.children}</h3>
    );
}