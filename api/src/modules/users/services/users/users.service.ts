import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import to from 'await-to-js';

import { User } from '@users/entities';
import { UserCreateDto, UserUpdateDto } from '@users/dto';
import { Authentication } from '@authentication/entities';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly shoppingCartService: ShoppingCartService,
  ) {}

  async create(dto: UserCreateDto, authentication?: Authentication): Promise<User> {
    const user = this.usersRepository.create({ ...dto, authentication });
    const [err, res] = await to(this.usersRepository.save(user));
    if (err) throw new ForbiddenException(err.name, err.message);
    await this.shoppingCartService.createCart(res.id);
    return user;
  }

  async find(options?: FindManyOptions<User>): Promise<User[]> {
    const users = this.usersRepository.find(options);
    return users;
  }

  async findOne(options: FindOneOptions<User>): Promise<User> {
    const user = await this.usersRepository.findOne(options);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateById(id: number, dto: UserUpdateDto): Promise<User> {
    const user = await this.usersRepository.preload({ id, ...dto });
    if (!user) throw new NotFoundException('User not found');
    await this.usersRepository.update({ id }, dto);
    return user;
  }

  async deleteById(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return await this.usersRepository.remove(user);
  }
}
