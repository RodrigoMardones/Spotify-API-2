"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
class SearchApi {
    constructor(tk) {
        this.instance = new spotify_web_api_node_1.default({
            "accessToken": tk,
        });
        console.log("instnacia creada con exito ");
    }
    findAlbums(album, otheroffset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listunparsed = yield this.instance.searchAlbums(album, { limit: 20, offset: otheroffset });
                //const listparsed  = this.listalbumbs(listunparsed.body.albums.items); 
                return listunparsed;
            }
            catch (err) {
                console.log("error retrieving albums from api", err);
            }
        });
    }
    listalbumbs(albums) {
        let list = [];
        albums.forEach(e => {
            let newel = {
                "type": e.album_type,
                "artistName": e.artists[0].name,
                "AlbumDisc": e.name,
                "releaseDate": e.release_date,
                "AlbumImage": e.images[0]
            };
        });
        return list;
    }
}
exports.SearchApi = SearchApi;
