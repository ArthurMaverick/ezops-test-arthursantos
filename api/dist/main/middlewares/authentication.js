"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_middleware_1 = require("../adapters/express-middleware");
const authentication_1 = require("../factories/app/middlewares/authentication");
exports.auth = (0, express_middleware_1.adaptExpressMiddlewares)((0, authentication_1.makeAuthenticationMiddleware)());
//# sourceMappingURL=authentication.js.map