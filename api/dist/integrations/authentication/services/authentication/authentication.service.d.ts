import { Authentication } from '@authentication/entities/authentication.entity';
import { Repository } from 'typeorm';
import { AuthenticationSignUpDto } from '@authentication/dto';
import { AuthRole, AuthTokenResponse, IDecodedToken } from '@authentication/constants';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@authentication/entities';
export declare class AuthenticationService {
    private readonly authRepository;
    private readonly rolesRepository;
    private readonly jwtService;
    constructor(authRepository: Repository<Authentication>, rolesRepository: Repository<Role>, jwtService: JwtService);
    validateByCredentials(identifier: string, plainTextPassword: string): Promise<Authentication>;
    validateByToken(payload: IDecodedToken): Promise<Authentication>;
    logIn(authentication: Authentication): Promise<AuthTokenResponse>;
    signUp(dto: AuthenticationSignUpDto, roles?: AuthRole[]): Promise<AuthTokenResponse>;
    syncAuthRoles(): Promise<void>;
    private validateAuthRoles;
}
