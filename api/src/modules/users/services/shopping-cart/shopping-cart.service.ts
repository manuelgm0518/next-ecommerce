import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import to from 'await-to-js';

import { ShoppingCartAddItemDto, ShoppingCartUpdateItemDto } from '@users/dto';
import { ShoppingCart, ShoppingCartItem, User } from '@users/entities';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly shoppingCartsRepository: Repository<ShoppingCart>,
    @InjectRepository(ShoppingCartItem)
    private readonly shoppingCartItemsRepository: Repository<ShoppingCartItem>,
  ) {}

  async createCart(user: User): Promise<ShoppingCart> {
    const exists = await this.shoppingCartsRepository.findOneBy({ user: { id: user.id } });
    if (!exists) {
      const cart = this.shoppingCartsRepository.create({ user });
      const [err] = await to(this.shoppingCartsRepository.save(cart));
      if (err) throw new ForbiddenException(err.name, err.message);
      return cart;
    }
  }

  async findCart(userId: number): Promise<ShoppingCart> {
    const cart = await this.shoppingCartsRepository.findOneBy({ user: { id: userId } });
    return cart;
  }

  async addItem(userId: number, dto: ShoppingCartAddItemDto): Promise<ShoppingCartItem> {
    const cart = await this.findCart(userId);
    const item = this.shoppingCartItemsRepository.create({
      shoppingCart: { id: cart.id },
      product: { id: dto.productId },
    });
    const [err] = await to(this.shoppingCartItemsRepository.save(item));
    if (err) throw new ForbiddenException(err.name, err.message);
    return item;
  }

  async updateItem(userId: number, dto: ShoppingCartUpdateItemDto): Promise<ShoppingCartItem> {
    const item = await this.shoppingCartItemsRepository.preload({ id: dto.shoppingCartItemId });
    if (!item) throw new NotFoundException('ShoppingCartItem not found');
    await this.shoppingCartItemsRepository.update(
      { shoppingCart: { id: dto.shoppingCartItemId } },
      { amount: dto.amount },
    );
    return item;
  }

  async removeItem(userId: number, dto: ShoppingCartUpdateItemDto): Promise<ShoppingCartItem> {
    const item = await this.shoppingCartItemsRepository.findOneBy({ id: dto.shoppingCartItemId });
    if (!item) throw new NotFoundException('ShoppingCartItem not found');
    return await this.shoppingCartItemsRepository.remove(item);
  }
}
