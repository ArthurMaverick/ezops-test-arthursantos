"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.forbidden = exports.unauthorized = exports.badRequest = exports.ok = void 0;
const http_1 = require("../errors/http");
const ok = (data) => ({
    statusCode: 200,
    data
});
exports.ok = ok;
const badRequest = (error) => ({
    statusCode: 400,
    data: error
});
exports.badRequest = badRequest;
const unauthorized = () => ({
    statusCode: 401,
    data: new http_1.UnauthorizedError()
});
exports.unauthorized = unauthorized;
const forbidden = () => ({
    statusCode: 403,
    data: new http_1.ForbiddenError()
});
exports.forbidden = forbidden;
const serverError = (error) => ({
    statusCode: 500,
    data: new http_1.ServerError(error instanceof Error ? error : undefined)
});
exports.serverError = serverError;
//# sourceMappingURL=http.js.map