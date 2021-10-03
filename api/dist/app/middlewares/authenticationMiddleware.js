"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const helpers_1 = require("../helpers");
const validations_1 = require("../validations");
class AuthenticationMiddleware {
    constructor(authorize) {
        this.authorize = authorize;
    }
    async handle({ authorization }) {
        if (!this.validate({ authorization }))
            return (0, helpers_1.forbidden)();
        try {
            const userId = await this.authorize({ token: authorization });
            return (0, helpers_1.ok)({ userId });
        }
        catch {
            return (0, helpers_1.forbidden)();
        }
    }
    validate({ authorization }) {
        const error = new validations_1.RequiredFieldValidation(authorization).validate('authorization');
        return error === undefined;
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authenticationMiddleware.js.map