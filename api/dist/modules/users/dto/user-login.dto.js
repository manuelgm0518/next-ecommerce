"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogInDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_signup_dto_1 = require("./user-signup.dto");
class UserLogInDto extends (0, swagger_1.PickType)(user_signup_dto_1.UserSignUpDto, ['email', 'password']) {
}
exports.UserLogInDto = UserLogInDto;
//# sourceMappingURL=user-login.dto.js.map