import {Router, Request, Response} from "express";
import {AuthApi, tokenclass}  from '../api/auth';
import { SearchApi } from '../api/search';
import { listenerCount } from "cluster";
import {SearchController} from '../controllers/controllers';

const router = Router();
//const newstoken:tokenclass = new AuthApi();
const sc = new SearchController();
//busqueda
router.post("/findalbum",sc.searchAlbum)


/* newstoken.getnewToken()
        .then(response =>{
            const newsearch = new SearchApi(response);
            newsearch.findAlbums('In Rainbows',0).then(
                function(data){
                    console.log(data);
                    res.json({data});
                },
                function(err){
                    console.log(err);
                }
            )
            
        }) */



//test de ruta
router.get("/test",(req: Request,res: Response)=>{
    res.json({
        "prueba" : true,
        "code":200
    });
})
// router.get("/test2",newsearch.testtwo)
//404notfound
router.get("*",(req: Request,res: Response) =>{
    res.end("404 not found");
})

export default router;