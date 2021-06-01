import {Urunler} from "../Urunler.json";


export default function UrunlerAPI(req, res) {
    const {konuID,icerikID} = req.query;

    const konuNo= Urunler[konuID].dersMenu;

    const found= konuNo.find(element => element.id==konuID);
    const found1= found.icerik.find(element2 => element2.id==icerikID );

  // const found2= konuNo.find(element => {element.icerik.find(element2 => element2.id == icerikID)})
  if (konuID=='NULL')
  res.status(200).json(Urunler);
  else
  res.status(200).json(found1);  
}

  