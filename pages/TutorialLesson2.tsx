import React from 'react';
import Navbar from '../components/Navbar';
import TutorialList from '../components/TutorialList';
import { useVideo } from '../hooks/useVideo';





export default function TutorialLesson2() {
    // uniteAdi={urunler.unite} dersAdi={urunler.ders} videoUrl={urunler.video} icerikAdi={urunler.icerik} isComplate='true'
    const { data, isLoading, isError, refetch } = useVideo(`0`,`Genel`);
    return (
        <div className="theme-light">

            <Navbar />
            {
            data &&
                <TutorialList data={data} uniteID={`0`} konuID={0} icerikID={0} />
            }

        </div>


    );
}