import  SpotifWebApi  from 'spotify-web-api-node';

export class SearchApi{
    private instance: any;
    constructor(tk: String){
        this.instance = new SpotifWebApi({
            "accessToken": tk,
        });
        console.log("instnacia creada con exito ")
    }
    public async findAlbums(album: string,otheroffset: number){
        try{
            const listunparsed = await this.instance.searchAlbums(album,{ limit : 20, offset : otheroffset });
            const listparsed  = this.listalbumbs(listunparsed.body.albums.items); 
            return listparsed;
        }catch(err){
            console.log("error retrieving albums from api", err);
        }
    }

    private listalbumbs(albums: any[]){
        let list: any = [];
        albums.forEach(e => {
            let newel = {
                "type":     e.album_type,
                "artistName":e.artists[0].name,
                "AlbumDisc" :e.name,
                "releaseDate":e.release_date,
                "AlbumImage" :e.images[0]
            }
            list.push(newel);
        });
        return list;
    }
}

