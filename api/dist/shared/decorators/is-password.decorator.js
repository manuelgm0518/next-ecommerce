"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_DESCRIPTION = exports.IsPassword = void 0;
const class_validator_1 = require("class-validator");
function IsPassword(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'isPassword',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                defaultMessage: (args) => `${propertyName} ${validatePassword(args.value)}`,
                validate(value) {
                    return validatePassword(value) === null;
                },
            },
        });
    };
}
exports.IsPassword = IsPassword;
function validatePassword(value) {
    if (!/[A-Z]/.test(value))
        return 'must contain at least one upper case letter';
    if (!/[a-z]/.test(value))
        return 'must contain at least one lower case letter';
    if (!/[0-9]/.test(value))
        return 'must contain at least one number';
    if (!/[#?!@$%^&*-]/.test(value))
        return 'must contain at least one special character';
    if (value.length < 8)
        return 'minimum length is 8';
    if (value.length > 32)
        return 'maximum length is 32';
    return null;
}
exports.PASSWORD_DESCRIPTION = 'Must contain at least one of: upper case letter, lower case letter, number and special character. Minimum length is 8 and maximum is 32';
//# sourceMappingURL=is-password.decorator.js.map