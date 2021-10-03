"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidation = void 0;
const composite_1 = require("../../../../app/validations/composite");
const required_1 = require("../../../../app/validations/required");
const makeValidation = () => {
    const validation = [];
    for (const field of ['name', 'message'])
        validation.push(new required_1.RequiredFieldValidation(field));
    return new composite_1.ValidationComposite(validation);
};
exports.makeValidation = makeValidation;
//# sourceMappingURL=validation-factory.js.map