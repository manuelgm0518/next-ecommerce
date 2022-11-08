export declare enum Environment {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    TEST = "test"
}
export declare class EnvironmentVariables {
    NODE_ENV: Environment;
    VERSION: number;
    PORT: number;
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string;
    DATABASE_NAME: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_PORT: number;
}
