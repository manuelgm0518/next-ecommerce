"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchProperty = void 0;
const class_validator_1 = require("class-validator");
function MatchProperty(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'MatchProperty',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                defaultMessage: () => `${propertyName} does not match with ${property}`,
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return value === relatedValue;
                },
            },
        });
    };
}
exports.MatchProperty = MatchProperty;
//# sourceMappingURL=match-property.decorator.js.map