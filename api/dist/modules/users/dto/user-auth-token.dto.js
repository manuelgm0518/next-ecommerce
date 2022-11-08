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
exports.UserAuthTokenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../entities");
class UserAuthTokenDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Model containing logged in `User` information' }),
    __metadata("design:type", entities_1.User)
], UserAuthTokenDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Authentication token required to validate protected endpoints' }),
    __metadata("design:type", String)
], UserAuthTokenDto.prototype, "authToken", void 0);
exports.UserAuthTokenDto = UserAuthTokenDto;
//# sourceMappingURL=user-auth-token.dto.js.map