"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMongoRepository = void 0;
const mongo_helper_ts_1 = require("./mongo-helper.ts");
class AccountMongoRepository {
    async findMessages() {
        const accountCollection = mongo_helper_ts_1.MongoHelper.getCollection('messages');
        const messages = await accountCollection.find().toArray();
        return messages;
    }
    async saveMessages(payload) {
        const accountCollection = mongo_helper_ts_1.MongoHelper.getCollection('messages');
        const result = await accountCollection.insertOne(payload);
        return result !== null;
    }
}
exports.AccountMongoRepository = AccountMongoRepository;
//# sourceMappingURL=account-mongo-repository.js.map