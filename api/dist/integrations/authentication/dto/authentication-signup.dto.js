"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationSignUpDto = void 0;
const authentication_entity_1 = require("../entities/authentication.entity");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../shared/decorators");
class AuthenticationSignUpDto extends (0, swagger_1.PickType)(authentication_entity_1.Authentication, ['identifier']) {
}
__decorate([
    (0, decorators_1.IsPassword)(),
    (0, swagger_1.ApiProperty)({ description: decorators_1.PASSWORD_DESCRIPTION }),
    __metadata("design:type", String)
], AuthenticationSignUpDto.prototype, "plainTextPassword", void 0);
exports.AuthenticationSignUpDto = AuthenticationSignUpDto;
//# sourceMappingURL=authentication-signup.dto.js.map