"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeJWTtokenHandler = void 0;
const env_1 = require("../../../config/env");
const gateways_1 = require("../../../../data/gateways");
const makeJWTtokenHandler = () => {
    return new gateways_1.JwtTokenHandler(env_1.env.jwtSecret);
};
exports.makeJWTtokenHandler = makeJWTtokenHandler;
//# sourceMappingURL=token-handler.js.map