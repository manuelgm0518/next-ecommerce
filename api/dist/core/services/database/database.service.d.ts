import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentService } from '../environment/environment.service';
export declare class DatabaseService implements TypeOrmOptionsFactory {
    private readonly environmentService;
    private name;
    private username;
    private password;
    private port;
    constructor(environmentService: EnvironmentService);
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
