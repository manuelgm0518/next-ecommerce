import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import to from 'await-to-js';

import { Sale, SaleProduct } from '@sales/entities';
import { ShoppingCartService, UsersService } from '@users/services';
import { ProductsService } from '@products/services';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly salesRepository: Repository<Sale>,
    @InjectRepository(SaleProduct)
    private readonly saleProductsRepository: Repository<SaleProduct>,
    private readonly usersService: UsersService,
    private readonly shoppingCartService: ShoppingCartService,
    private readonly productsService: ProductsService,
  ) {}

  async create(userId: number): Promise<Sale> {
    const user = await this.usersService.findOne({ where: { id: userId }, relations: ['shoppingCart'] });
    if (!user) throw new NotFoundException('The provided User does not exist.');
    const cart = await this.shoppingCartService.findCart(user.id);
    if (!cart) throw new NotFoundException('The provided User does not have a Shopping Cart');
    if (cart.isEmpty) throw new ForbiddenException('The provided User does not have any Item in its Shopping Cart');
    const sale = this.salesRepository.create({ soldTo: user });
    const res = await this.salesRepository.save(sale);
    const products = await Promise.all(
      cart.items.map(async (item) => {
        const product = this.saleProductsRepository.create({
          sale: res,
          product: item.product,
          amount: item.amount,
        });
        const productRes = await this.saleProductsRepository.save(product);
        await this.productsService.updateById(product.product.id, { stock: product.product.stock - item.amount });
        return productRes;
      }),
    );
    for (const item of cart.items) await this.shoppingCartService.removeItem(user.id, { shoppingCartItemId: item.id });
    return { ...res, products } as Sale;
  }

  async find(options?: FindManyOptions<Sale>): Promise<Sale[]> {
    const sales = await this.salesRepository.find(options);
    return sales;
  }

  async findOne(options: FindOneOptions<Sale>): Promise<Sale> {
    const sale = await this.salesRepository.findOne(options);
    if (!sale) throw new NotFoundException('Sale not found');
    return sale;
  }
}
