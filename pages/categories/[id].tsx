import { useRouter } from "next/router";
import React from "react";
import { useCategory } from "../../hooks/useCategory";
import Navbar from "../../components/Navbar";
import { Disclosure } from "@headlessui/react";
import SectionInfo from "../../components/SectionInfo";
import { ChevronUpIcon } from "@heroicons/react/solid";
import DisclosureElement from "../../components/Disclosure";
import ProdutInfo from "../../components/ProdutInfo";
import ProdutInfoDetails from "../../components/ProductInfoDetails";
import Footer from "../../components/Footer";

export default function Category() {
  const router = useRouter();
  const category = useCategory(String(router.query.id));

  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <div className=" w-5/6 lg:w-3/4 xl:w-2/3 mx-auto shadow-lg rounded-md bg-white">
        <ProdutInfo />
      </div>
      <div className="w-5/6 lg:w-2/3 mt-4 p-2 mx-auto space-y-2 bg-gray-500 rounded-lg">
        <DisclosureElement veri={"Ne zaman videolara erişebilirim"} />
        <DisclosureElement veri={"Hangi kargo firması ile teslim edilek?"} />
        <DisclosureElement veri={"Ne zamana kadar erişim sağlayabilrim"} />
      </div>
      <div className="w-5/6 lg:w-2/3 mt-4 mx-auto">
        <SectionInfo />
      </div>
      <Footer />
    </div>
  );
}
