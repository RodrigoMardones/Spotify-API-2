import express from "express";
import path from "path";
import morgan from "morgan";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from './routes/routes';


export default class Server{
    public app: express.Application;
    public port: number;
    //constructor  de la clase
    constructor(actualport: number){
        this.port = actualport; 
        this.app = express();
        
    }
    //init para el proyecto
    static init(port: number){
        return new Server(port);
    }
    //configuracion extendida para el server
    private config(): void{
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(morgan('dev'));
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({     
            extended: true
          }));
        this.app.use(cors())
        this.app.use(cookieParser()); 
        this.app.use("/apiroutes",routes);
    }
    //start server
    public start(callback: Function){
        this.config();
        this.app.listen(this.port,callback);
    }
}

