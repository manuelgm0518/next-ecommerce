import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { User } from '@users/entities';
import { UserCreateDto, UserUpdateDto } from '@users/dto';
import { Authentication } from '@authentication/entities';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(dto: UserCreateDto, authentication?: Authentication): Promise<User>;
    find(options?: FindManyOptions<User>): Promise<User[]>;
    findOne(options: FindOneOptions<User>): Promise<User>;
    updateById(id: number, dto: UserUpdateDto): Promise<User>;
    deleteById(id: number): Promise<User>;
}
