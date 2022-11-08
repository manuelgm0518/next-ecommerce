import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { EnvironmentService } from '../services';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly environmentService;
    constructor(environmentService: EnvironmentService);
    catch(exception: unknown, host: ArgumentsHost): void;
}
