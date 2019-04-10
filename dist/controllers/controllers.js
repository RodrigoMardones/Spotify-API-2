"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../api/auth");
const search_1 = require("../api/search");
const models_1 = require("../models/models");
class SearchController {
    searchAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //conexion api
                const auth = new auth_1.AuthApi();
                const tk = yield auth.getnewToken();
                const search = new search_1.SearchApi(tk);
                //vars taken from index.html
                let AtoS = req.body.word;
                const results = yield search.findAlbums(AtoS, 0);
                const cn = new models_1.modelmongo();
                if (results.length != 0) {
                    cn.addcolection(results);
                }
                res.status(200).json({
                    code: 200,
                    list: results,
                });
            }
            catch (err) {
                console.log("Error retrieving the info", err);
                return res.status(400).json({
                    code: 400,
                    message: "Error al intentar buscar los albumes pedidos"
                });
            }
        });
    }
}
exports.SearchController = SearchController;
