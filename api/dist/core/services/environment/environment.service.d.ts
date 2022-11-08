import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@core/constants';
export declare class EnvironmentService {
    private configService;
    constructor(configService: ConfigService);
    get isDevelopment(): boolean;
    get isTesting(): boolean;
    get isProduction(): boolean;
    get version(): string;
    get<K extends keyof EnvironmentVariables, T extends typeof EnvironmentVariables.prototype[K]>(key: K): T;
}
