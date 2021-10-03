"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveMessagesController = void 0;
const helpers_1 = require("../helpers");
class SaveMessagesController {
    constructor(validation, save) {
        this.validation = validation;
        this.save = save;
    }
    async handle(body) {
        // console.log(body)
        try {
            const error = this.validation.validate(body);
            if (error)
                return (0, helpers_1.badRequest)(error);
            const result = await this.save.saveMessages(body);
            return (0, helpers_1.ok)(result);
        }
        catch (err) {
            return (0, helpers_1.serverError)(err);
        }
    }
}
exports.SaveMessagesController = SaveMessagesController;
//# sourceMappingURL=save.js.map