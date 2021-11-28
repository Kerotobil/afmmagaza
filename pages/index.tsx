import React from "react";
import Head from "next/head";
import Banner2 from "../components/Banner2";
import { Layout } from "../components/layout";

export default function index() {
  return (
    <Layout variant="home">
      <Head>
        <meta
          property="keywords"
          content="problemler, soru bankası, kitabı, video, ders, koz, tyt, KOZ Serisi TYT Problemler Video Ders Seti"
        />
      </Head>
      <div className="w-full h-full bg-white  pb-20 theme-light overflow-hidden">
        <div className="space-y-10 ">
          <Banner2 />
        </div>
      </div>
    </Layout>
  );
}
