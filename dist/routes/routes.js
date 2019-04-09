"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/findalbum", (req, res) => {
    console.log("searching");
});
router.get("/test", (req, res) => {
    res.json({
        "prueba": true,
        "code": 200
    });
});
router.get("*", (req, res) => {
    res.end("404 not found");
});
exports.default = router;
