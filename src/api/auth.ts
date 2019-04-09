
import { SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET } from './secretkeys';
import { Request,Response } from 'express';
import  SpotifWebApi from 'spotify-web-api-node';


export interface tokenclass {
    getnewToken() : Promise<string>,
    // restoken(req:Request,res: Response): Promise<void>
}

export class AuthApi implements tokenclass{
    private instance: any;
    
    constructor(){
        this.instance = new SpotifWebApi({
            clientId : SPOTIFY_CLIENT_ID,
            clientSecret : SPOTIFY_CLIENT_SECRET,
        });
        
    }

    public async getnewToken(){
        try{
            const newtoken = await this.instance.clientCredentialsGrant();
            return newtoken.body['access_token'];
        }catch(err){
            console.log("error retrieving the token", err);
        }
        
        
    }
    /* public async restoken(req: Request,res: Response){
        const tk = await this.getnewToken();
        res.json({
            code:200,
            tk,
        })
    } */
/*     public testtwo(req: Request,res: Response){
        res.json({
            "status": 200,
            "message": "test2 pasa desde api"
        })
    } */
    
}
