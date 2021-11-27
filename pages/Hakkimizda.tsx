import React from "react";
import TextArea from "../components/TextArea";
import Navbar from "../components/home/Navbar";

export default function Hakkimizda() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-10 bg-gray-200">
        <TextArea
          title={"HAKKIMIZDA"}
          text={
            "Akıl Fikir Mektebi Yayınları; Yardımcı Kaynak alanında çağın gerektirdiği yayın ve hizmetler ile sevgili öğrencilerimizin sınıflarında ve geleceklerinde başarılı olmalarını sağlamak ve değerli öğretmenlerimize güçlü bir materyal sunmak üzere 2019 yılında kurulmuştur.Akıl Fikir Mektebi Yayınları; Yardımcı Kaynak alanında çağın gerektirdiği yayın ve hizmetler ile sevgili öğrencilerimizin sınıflarında ve geleceklerinde başarılı olmalarını sağlamak ve değerli öğretmenlerimize güçlü bir materyal sunmak üzere 2019 yılında kurulmuştur."
          }
        />
      </div>
    </div>
  );
}
