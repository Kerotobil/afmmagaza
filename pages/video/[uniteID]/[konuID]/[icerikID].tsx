import React from 'react';
import Navbar from '../../../../components/Navbar';
import TutorialList from '../../../../components/TutorialList';

import { useRouter } from 'next/router';
import {useVideo} from '../../../../hooks/useVideo';


export default function Sayfa() {
  
  const { query: {uniteID,konuID, icerikID} } = useRouter();

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
  const {data, isLoading, isError, refetch} = useVideo(`${uniteID}`, `Genel`);

  return (
    <div>
      <Navbar />
      {
        data &&
        <TutorialList data={data} uniteID={uniteID} konuID={konuID} icerikID={icerikID}/>
      }
    </div>
  );
}
