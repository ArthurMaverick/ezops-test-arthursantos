"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMiddlewares = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const setupMiddlewares = (app) => {
    // app.use((req,res,next)=> {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    //   res.header("Access-Control-Allow-Headers", "X-PINGOTHER, content-type, Authorization");
    //   next();
    // })
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    app.use((req, res, next) => {
        res.type('json');
        next();
    });
};
exports.setupMiddlewares = setupMiddlewares;
//# sourceMappingURL=expressMiddles.js.map