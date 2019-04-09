import express from "express";
export default class Server {
    app: express.Application;
    port: number;
    constructor(actualport: number);
    static init(port: number): Server;
    private config;
    start(callback: Function): void;
}
