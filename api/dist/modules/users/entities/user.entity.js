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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../integrations/authentication/entities");
const class_transformer_1 = require("class-transformer");
let User = class User {
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get roles() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.authentication) === null || _a === void 0 ? void 0 : _a.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e.authRole)) !== null && _c !== void 0 ? _c : [];
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User unique identifier' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User's email address" }),
    (0, class_validator_1.IsEmail)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User's first name" }),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User's last name" }),
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => entities_1.Authentication }),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.OneToOne)(() => entities_1.Authentication, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", entities_1.Authentication)
], User.prototype, "authentication", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map