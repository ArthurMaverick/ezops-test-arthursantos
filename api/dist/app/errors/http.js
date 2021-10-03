"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParamError = exports.ForbiddenError = exports.UnauthorizedError = exports.ServerError = void 0;
class ServerError extends Error {
    constructor(error) {
        super('Sever faild. try again soon');
        this.name = 'ServerError';
        this.stack = error === null || error === void 0 ? void 0 : error.stack;
    }
}
exports.ServerError = ServerError;
class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized');
        this.name = 'UnauthorizedError';
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends Error {
    constructor() {
        super('Access denied');
        this.name = 'ForbiddenError';
    }
}
exports.ForbiddenError = ForbiddenError;
class MissingParamError extends Error {
    constructor(paramName) {
        super(`Missing param: ${paramName}`);
        this.name = 'MissingParamError';
    }
}
exports.MissingParamError = MissingParamError;
//# sourceMappingURL=http.js.map