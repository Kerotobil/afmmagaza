import axios, { AxiosResponse } from 'axios';
import React from 'react';
import Navbar from '../../../components/Navbar';
import TutorialList from '../../../components/TutorialList';
import { Urunler } from '../../Urunler.json';

// let veriBurda:Object;


//  var uniteAdi:string="Sayı ve Kesir Problemleri";
//  var dersAdi:string;
//  var videoUrl:string;
//  var icerikAdi:string;
//  var text:string;
//  var isComplate:boolean;

// const "employee": [{id:0, uniteAdi:uniteAdi, dersAdi:dersAdi, videoUrl:videoUrl, icerikAdi:icerikAdi, text:text, isComplate:isComplate},
//     {id:1, uniteAdi:"alo", dersAdi:dersAdi, videoUrl:videoUrl, icerikAdi:icerikAdi, text:text, isComplate:isComplate]



export default function Sayfa({icerik}, konu, icerikDegeri) {
  // uniteAdi={urunler.unite} dersAdi={urunler.ders} videoUrl={urunler.video} icerikAdi={urunler.icerik} isComplate='true'
  return (
    <div>
      <Navbar />
      <TutorialList data={{icerik}} konuSirasi={konu} icerik={icerikDegeri} />
    </div>
  );
}

export async function getStaticPaths(konuID) {
  const veri = await axios.get("http://localhost:3002/Urunler");
  console.log(veri.data[0].dersMenu[0])
  console.log("darari");
  return {
    paths: veri.data[0].dersMenu.map(ders => {
      ders.icerik.map(ver => {
        return {
          params: { icerikID: `${ver.id}` }
        }
      })
    })
    ,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const veri = await axios.get("http://localhost:3002/Urunler");
  let veri2 = veri.data[0].dersMenu;
  return {
    props: {
      icerik: { veri2 },
      konu: params.konuID,
      icerikDegeri: params.icerikID
    }
  }


}