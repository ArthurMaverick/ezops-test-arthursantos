"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeFindController = void 0;
const find_1 = require("../../../../app/controllers/find");
const account_mongo_find_repository_1 = require("../../data/mongo/account-mongo-find-repository");
const MakeFindController = () => {
    return new find_1.FindMessagesController((0, account_mongo_find_repository_1.makeAddMessagens)());
};
exports.MakeFindController = MakeFindController;
//# sourceMappingURL=find-factory.js.map