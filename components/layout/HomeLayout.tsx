import React from "react";
import Head from "next/head";
import Navbar from "../home/Navbar";
type Props = {};

export const HomeLayout: React.FC<Props> = (props) => {
  return (
    <div className="theme-light">
      <Head>
        <title>Akıl Fikir Mektebi</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Akıl Fikir Mektebi" key="title" />
        <meta property="key" content="" />
      </Head>
      <div>
        <Navbar />
      </div>

      {props.children}
    </div>
  );
};
