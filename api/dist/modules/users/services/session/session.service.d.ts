import { Repository } from 'typeorm';
import { AuthenticationService } from '@authentication/services';
import { UserAuthTokenDto, UserSignUpDto } from '@users/dto';
import { User } from '@users/entities';
export declare class SessionService {
    private readonly usersRepository;
    private readonly authService;
    constructor(usersRepository: Repository<User>, authService: AuthenticationService);
    signUp(dto: UserSignUpDto, isAdmin?: boolean): Promise<UserAuthTokenDto>;
    logIn(email: string): Promise<UserAuthTokenDto>;
    testAdmin(): Promise<void>;
}
