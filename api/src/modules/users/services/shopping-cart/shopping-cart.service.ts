import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import to from 'await-to-js';

import { ShoppingCartAddItemDto, ShoppingCartUpdateItemDto } from '@users/dto';
import { ShoppingCart, ShoppingCartItem } from '@users/entities';
import { ShoppingCartRemoveItemDto } from '@users/dto/shopping-cart-remove-item.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly shoppingCartsRepository: Repository<ShoppingCart>,
    @InjectRepository(ShoppingCartItem)
    private readonly shoppingCartItemsRepository: Repository<ShoppingCartItem>,
  ) {}

  async createCart(userId: number): Promise<ShoppingCart> {
    const exists = await this.shoppingCartsRepository.findOneBy({ user: { id: userId } });
    if (!exists) {
      const cart = this.shoppingCartsRepository.create({ user: { id: userId } });
      const [err] = await to(this.shoppingCartsRepository.save(cart));
      if (err) throw new ForbiddenException(err.name, err.message);
      return cart;
    }
    return exists;
  }

  async findCart(userId: number): Promise<ShoppingCart> {
    const cart = await this.createCart(userId);
    return cart;
  }

  async addItem(userId: number, dto: ShoppingCartAddItemDto): Promise<ShoppingCartItem> {
    const cart = await this.findCart(userId);
    const exists = await this.shoppingCartItemsRepository.findOneBy({ product: { id: dto.productId } });
    if (exists) {
      await this.shoppingCartItemsRepository.update({ id: exists.id }, { amount: exists.amount + dto.amount });
      return exists;
    } else {
      const item = this.shoppingCartItemsRepository.create({
        shoppingCart: { id: cart.id },
        product: { id: dto.productId },
      });
      const [err] = await to(this.shoppingCartItemsRepository.save(item));
      if (err) throw new ForbiddenException(err.name, err.message);
      return item;
    }
  }

  async updateItem(userId: number, dto: ShoppingCartUpdateItemDto): Promise<ShoppingCartItem> {
    const item = await this.shoppingCartItemsRepository.preload({
      shoppingCart: { user: { id: userId } },
      amount: dto.amount,
      id: dto.shoppingCartItemId,
    });
    if (!item) throw new NotFoundException('ShoppingCartItem not found');
    await this.shoppingCartItemsRepository.update({ id: dto.shoppingCartItemId }, { amount: dto.amount });
    return item;
  }

  async removeItem(userId: number, dto: ShoppingCartRemoveItemDto): Promise<ShoppingCartItem> {
    const item = await this.shoppingCartItemsRepository.findOneBy({
      shoppingCart: { user: { id: userId } },
      id: dto.shoppingCartItemId,
    });
    if (!item) throw new NotFoundException('ShoppingCartItem not found');
    return await this.shoppingCartItemsRepository.remove(item);
  }
}
