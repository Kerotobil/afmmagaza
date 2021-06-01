import {Dersler} from "../../Dersler.json";


export default function GenelAPI(req, res) {
    const {uniteID,konuID}=req.query;
    let result1;
    Dersler.map((element)=>{
       result1= element.Ders.find(element2 => element2.id==uniteID)
       
    })

    if(konuID!=null){
        const result2= result1.icerik.find(element => element.id==konuID)
        res.status(200).json(result2)}
        else if(uniteID==null){res.status(200).json(Dersler);}
        else{
            res.status(200).json(result1);

        }
        
  
        
 //   const result=Dersler.find((element,index) => element[index].Ders.id == element[index].Ders.find((element2,index)=> element2[index]==uniteID))

 
}