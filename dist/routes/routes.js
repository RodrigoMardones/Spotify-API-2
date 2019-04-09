"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../api/auth");
const search_1 = require("../api/search");
const router = express_1.Router();
const newstoken = new auth_1.AuthApi();
//busqueda
router.get("/findalbum", (req, res) => {
    newstoken.getnewToken()
        .then(response => {
        const newsearch = new search_1.SearchApi(response);
        newsearch.findAlbums(encodeURI("In Rainbows"), 15).then(function (data) {
            console.log(data);
            res.json({ data });
        }, function (err) {
            console.log(err);
        });
    });
});
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
