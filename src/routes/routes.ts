import {Router, Request, Response} from "express";
import request from "request":
const router = Router();

router.get("/findalbum",(req: Request,res: Response) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };
      //prueba con request
      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          res.json({ token: body.access_token });
        }
      });
})

router.get("/test",(req: Request,res: Response)=>{
    res.json({
        "prueba" : true,
        "code":200
    });
})
router.get("*",(req: Request,res: Response) =>{
    res.end("404 not found");
})

export default router; 