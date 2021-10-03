"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const mongo_helper_ts_1 = require("../data/mongo/mongo-helper.ts");
if (typeof env_1.env.mongoDB === 'string') {
    mongo_helper_ts_1.MongoHelper.connect(env_1.env.mongoDB)
        .then(async () => {
        const { httpServer } = require('./config/app');
        httpServer.listen(env_1.env.port, () => console.log(`server running at port ${env_1.env.port} :-) -> localhost: ${env_1.env.port}`));
    }).catch(console.error);
}
//# sourceMappingURL=server.js.map