"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const mongo_1 = require("../data/mongo");
if (typeof env_1.env.mongoDB === 'string') {
    mongo_1.MongoHelper.connect(env_1.env.mongoDBdev)
        .then(async () => {
        const { httpServer } = require('./config/app');
        httpServer.listen(env_1.env.port, () => console.log(`server running at port ${env_1.env.port} :-) -> localhost: ${env_1.env.port}`));
    }).catch(console.error);
}
//# sourceMappingURL=dev-server.js.map