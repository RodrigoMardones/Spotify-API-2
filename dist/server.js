"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
class Server {
    //constructor  de la clase
    constructor(actualport) {
        this.port = actualport;
        this.app = express_1.default();
    }
    //init para el proyecto
    static init(port) {
        return new Server(port);
    }
    //configuracion extendida para el server
    config() {
        this.app.use(express_1.default.static(__dirname + "/public"));
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
        this.app.use(cors_1.default());
        this.app.use(cookie_parser_1.default());
        this.app.use("/apiroutes", routes_1.default);
    }
    //start server
    start(callback) {
        this.config();
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
