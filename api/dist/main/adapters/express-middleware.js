"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptExpressMiddlewares = void 0;
const adaptExpressMiddlewares = (middleware) => async (req, res, next) => {
    const { data, statusCode } = await middleware.handle({ ...req.headers });
    if (statusCode === 200) {
        const validEntries = Object.entries(data).filter(([, value]) => value);
        req.locals = { ...req.locals, ...Object.fromEntries(validEntries) };
        next();
    }
    else {
        res.status(statusCode).json({ error: data.message });
    }
};
exports.adaptExpressMiddlewares = adaptExpressMiddlewares;
//# sourceMappingURL=express-middleware.js.map