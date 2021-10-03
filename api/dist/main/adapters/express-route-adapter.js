"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptExpressRoute = void 0;
const adaptExpressRoute = controller => async (req, res) => {
    const io = req.app.get('socketio');
    io.emit('send', { name: req.body.name, message: req.body.message, }); // fix that
    const { statusCode, data } = await controller.handle({ ...req.body, ...req.params });
    const json = [200, 204].includes(statusCode) ? data : { error: data.message };
    res.status(statusCode).json(json);
};
exports.adaptExpressRoute = adaptExpressRoute;
//# sourceMappingURL=express-route-adapter.js.map