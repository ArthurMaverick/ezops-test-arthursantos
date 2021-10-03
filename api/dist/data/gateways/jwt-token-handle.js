"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenHandler = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtTokenHandler {
    constructor(secret) {
        this.secret = secret;
    }
    async generate({ expirationInMs, key }) {
        const expirationInSeconds = expirationInMs / 1000;
        return (0, jsonwebtoken_1.sign)({ key }, this.secret, { expiresIn: expirationInSeconds });
    }
    async validate({ token }) {
        const payload = (0, jsonwebtoken_1.verify)(token, this.secret);
        return payload.key;
    }
}
exports.JwtTokenHandler = JwtTokenHandler;
//# sourceMappingURL=jwt-token-handle.js.map