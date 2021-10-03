"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddMessagens = void 0;
const mongo_1 = require("../../../../data/mongo");
const makeAddMessagens = () => {
    return new mongo_1.AccountMongoRepository();
};
exports.makeAddMessagens = makeAddMessagens;
//# sourceMappingURL=account-mongo-find-repository.js.map