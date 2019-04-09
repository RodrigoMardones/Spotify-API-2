import { Request, Response } from 'express';
export default class SearchAlbumApi {
    instance: any;
    constructor();
    getToken(): Promise<any>;
    restoken(req: Request, res: Response): void;
}
