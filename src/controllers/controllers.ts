import { Response,Request } from 'express';
import {AuthApi,tokenclass} from '../api/auth';
import {SearchApi} from '../api/search'



export class SearchController{
    public async searchAlbum(req: Request,res: Response){
        try{
            //conexion api
            const auth:tokenclass = new AuthApi();
            const tk = await auth.getnewToken();
            const search = new SearchApi(tk);
            //vars taken from index.html
            let AtoS = req.body.word;
            const results = await search.findAlbums(AtoS,0);
            res.json({
                code: 200,
                list: results,
            })
        }
        catch(err){
            console.log("Error retrieving the info", err);
            return res.status(400).json({
                code : 400,
                message : "Error al intentar buscar los albumes pedidos"
            })
        }
    }
}