"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldValidation = void 0;
const http_1 = require("../errors/http");
class RequiredFieldValidation {
    constructor(fieldName) {
        this.fieldName = fieldName;
    }
    validate(input) {
        if (!input[this.fieldName]) {
            return new http_1.MissingParamError(this.fieldName);
        }
    }
}
exports.RequiredFieldValidation = RequiredFieldValidation;
//# sourceMappingURL=required.js.map