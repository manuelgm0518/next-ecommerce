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
exports.Authentication = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const auth_roles_entity_1 = require("./auth-roles.entity");
let Authentication = class Authentication {
};
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Authentication.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Access unique identifier required to access. Could be an email, username, etc.' }),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Authentication.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hashed access key' }),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Authentication.prototype, "passwordHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'A list containing ever role of the user', isArray: true, enum: auth_roles_entity_1.Role }),
    (0, typeorm_1.ManyToMany)(() => auth_roles_entity_1.Role, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Authentication.prototype, "roles", void 0);
Authentication = __decorate([
    (0, typeorm_1.Entity)()
], Authentication);
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.entity.js.map