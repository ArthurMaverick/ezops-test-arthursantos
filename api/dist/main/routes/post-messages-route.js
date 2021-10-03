"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const save_factory_1 = require("../factories/app/controllers/save-factory");
exports.default = (router) => {
    router.post('/messages', (0, express_route_adapter_1.adaptExpressRoute)((0, save_factory_1.MakeSaveController)()));
};
//# sourceMappingURL=post-messages-route.js.map