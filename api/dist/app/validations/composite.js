"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationComposite = void 0;
class ValidationComposite {
    constructor(validators) {
        this.validators = validators;
    }
    validate(input) {
        for (const validator of this.validators) {
            const error = validator.validate(input);
            if (error)
                return error;
        }
    }
}
exports.ValidationComposite = ValidationComposite;
//# sourceMappingURL=composite.js.map