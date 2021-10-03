"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthenticationMiddleware = void 0;
const token_handler_1 = require("../../data/gateways/token-handler");
const authenticationMiddleware_1 = require("../../../../app/middlewares/authenticationMiddleware");
const makeAuthenticationMiddleware = () => {
    const jwt = (0, token_handler_1.makeJWTtokenHandler)();
    return new authenticationMiddleware_1.AuthenticationMiddleware(jwt.validate.bind(jwt));
};
exports.makeAuthenticationMiddleware = makeAuthenticationMiddleware;
//# sourceMappingURL=authentication.js.map