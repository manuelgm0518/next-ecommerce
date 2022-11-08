import { Authentication } from '@authentication/entities';
import { IHttpResponse } from '@core/constants';
import { UserAuthTokenDto, UserSignUpDto } from '@users/dto';
import { SessionService } from '@users/services';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    logIn(authentication: Authentication): Promise<IHttpResponse<UserAuthTokenDto>>;
    signUp(body: UserSignUpDto): Promise<IHttpResponse<UserAuthTokenDto>>;
}
