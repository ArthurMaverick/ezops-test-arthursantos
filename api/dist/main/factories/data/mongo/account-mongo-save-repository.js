"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSaveMessagens = void 0;
const mongo_1 = require("../../../../data/mongo");
const makeSaveMessagens = () => {
    return new mongo_1.AccountMongoRepository();
};
exports.makeSaveMessagens = makeSaveMessagens;
//# sourceMappingURL=account-mongo-save-repository.js.map