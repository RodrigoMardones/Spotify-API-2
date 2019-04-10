"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//errores importando normal
const mongodb_1 = require("mongodb");
const dbsecretkeys_1 = require("./dbsecretkeys");
class modelmongo {
    constructor() {
        this.dbconection = new mongodb_1.MongoClient(dbsecretkeys_1.DB_URL, { useNewUrlParser: true });
        this.dbconection.connect((err) => {
            if (err) {
                console.log("error conecting to the db", err);
                throw err;
                this.dbconection.close();
            }
            else {
                console.log("conected to the db");
                this.dbconection.close();
            }
        });
    }
    addcolection(albumes) {
        this.dbconection.connect((err) => {
            if (err) {
                console.log("error conecting to the db", err);
                throw err;
                this.dbconection.close();
            }
            else {
                const collection = this.dbconection.db(dbsecretkeys_1.DB_NAME).collection(dbsecretkeys_1.COLLECT);
                collection.insertMany(albumes);
                this.dbconection.close();
            }
        });
    }
}
exports.modelmongo = modelmongo;
