"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMessagesController = void 0;
const helpers_1 = require("../helpers");
class FindMessagesController {
    constructor(find) {
        this.find = find;
    }
    async handle() {
        try {
            const result = await this.find.findMessages();
            return (0, helpers_1.ok)(result);
        }
        catch (err) {
            return (0, helpers_1.serverError)(err);
        }
    }
}
exports.FindMessagesController = FindMessagesController;
//# sourceMappingURL=find.js.map