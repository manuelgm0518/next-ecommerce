import { IHttpResponse } from '@core/constants';
import { User } from '@users/entities';
import { UsersService } from '@users/services';
import { UserCreateDto, UserUpdateDto } from '@users/dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: UserCreateDto): Promise<IHttpResponse<User>>;
    find(user: User): Promise<IHttpResponse<User[]>>;
    findById(id: number): Promise<IHttpResponse<User>>;
    updateById(id: number, body: UserUpdateDto): Promise<IHttpResponse<User>>;
    deleteById(id: number): Promise<IHttpResponse<User>>;
}
