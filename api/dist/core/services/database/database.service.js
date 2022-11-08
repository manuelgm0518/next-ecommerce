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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const environment_service_1 = require("../environment/environment.service");
let DatabaseService = class DatabaseService {
    constructor(environmentService) {
        this.environmentService = environmentService;
        this.name = this.environmentService.get('DATABASE_NAME');
        this.username = this.environmentService.get('DATABASE_USERNAME');
        this.password = this.environmentService.get('DATABASE_PASSWORD');
        this.port = this.environmentService.get('DATABASE_PORT');
    }
    createTypeOrmOptions() {
        return {
            type: 'mysql',
            host: 'localhost',
            port: this.port,
            database: this.name,
            username: this.username,
            password: this.password,
            autoLoadEntities: true,
            synchronize: !this.environmentService.isProduction,
        };
    }
};
DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map