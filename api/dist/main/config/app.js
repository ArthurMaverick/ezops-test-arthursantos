"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const expressMiddles_1 = require("./expressMiddles");
const routes_1 = require("./routes");
const ExpressApp = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(ExpressApp);
exports.httpServer = httpServer;
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:4000",
        maxAge: 10000
    }
});
io.on('connection', (socket) => {
    console.log('A user connected ' + socket.id);
});
ExpressApp.set('socketio', io);
(0, expressMiddles_1.setupMiddlewares)(ExpressApp);
(0, routes_1.setupRoutes)(ExpressApp);
//# sourceMappingURL=app.js.map