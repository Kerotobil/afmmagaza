import {Urunler} from "../Urunler.json";


export default function GenelAPI(req, res) {
    const {uniteID}=req.query;
    const result=Urunler.find(element => element.id==uniteID)
    res.status(200).json(result);
}