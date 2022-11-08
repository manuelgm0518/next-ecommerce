import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '@users/services';
export declare class SessionGuard implements CanActivate {
    private readonly usersService;
    constructor(usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
