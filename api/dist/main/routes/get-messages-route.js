"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const find_factory_1 = require("../factories/app/controllers/find-factory");
exports.default = (router) => {
    router.get('/messages', (0, express_route_adapter_1.adaptExpressRoute)((0, find_factory_1.MakeFindController)()));
};
//# sourceMappingURL=get-messages-route.js.map