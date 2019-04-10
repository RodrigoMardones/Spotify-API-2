
//errores importando normal
import { MongoClient } from 'mongodb';
import { DB_URL,DB_NAME , COLLECT } from './dbsecretkeys';


export class modelmongo{
    
    private dbconection: any;

    constructor(){
        this.dbconection = new MongoClient(DB_URL, { useNewUrlParser: true });
        this.dbconection.connect((err: any)=>{
            if(err){
                console.log("error conecting to the db",err);
                throw err;
                this.dbconection.close();
            }else{
                console.log("conected to the db");
                this.dbconection.close();
            }

        })
    }   
    public addcolection(albumes: any[]){
        this.dbconection.connect((err: any)=>{
            if(err){
                console.log("error conecting to the db",err);
                throw err;
                this.dbconection.close();
            }else{
                const collection = this.dbconection.db(DB_NAME).collection(COLLECT);
                collection.insertMany(albumes); 
                this.dbconection.close();
            }

        })
    }
}