"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSaveController = void 0;
const save_1 = require("../../../../app/controllers/save");
const account_mongo_save_repository_1 = require("../../data/mongo/account-mongo-save-repository");
const validation_factory_1 = require("../validation/validation-factory");
const MakeSaveController = () => {
    return new save_1.SaveMessagesController((0, validation_factory_1.makeValidation)(), (0, account_mongo_save_repository_1.makeSaveMessagens)());
};
exports.MakeSaveController = MakeSaveController;
//# sourceMappingURL=save-factory.js.map