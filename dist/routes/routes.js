"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const router = express_1.Router();
//const newstoken:tokenclass = new AuthApi();
const sc = new controllers_1.SearchController();
//busqueda
router.post("/findalbum", sc.searchAlbum);
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
router.get("/test", (req, res) => {
    res.json({
        "prueba": true,
        "code": 200
    });
});
// router.get("/test2",newsearch.testtwo)
//404notfound
router.get("*", (req, res) => {
    res.end("404 not found");
});
exports.default = router;
