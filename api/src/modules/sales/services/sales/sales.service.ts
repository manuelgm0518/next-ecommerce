import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import to from 'await-to-js';

import { Sale, SaleProduct } from '@sales/entities';
import { UsersService } from '@users/services';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly salesRepository: Repository<Sale>,
    @InjectRepository(SaleProduct)
    private readonly saleProductsRepository: Repository<SaleProduct>,
    private readonly usersService: UsersService,
  ) {}

  async create(userId: number): Promise<Sale> {
    const user = await this.usersService.findOne({ where: { id: userId }, relations: { shoppingCart: true } });
    if (!user) throw new NotFoundException('The provided User does not exist.');
    if (!user.shoppingCart) throw new NotFoundException('The provided User does not have a Shopping Cart');
    if (user.shoppingCart.isEmpty)
      throw new ForbiddenException('The provided User does not have any Item in its Shopping Cart');
    const products = user.shoppingCart.items.map((item) => {
      return this.saleProductsRepository.create({
        product: item.product,
        amount: item.amount,
      });
    });
    const sale = this.salesRepository.create({
      soldTo: user,
      products,
    });
    const [err] = await to(this.salesRepository.save(sale));
    if (err) throw new ForbiddenException(err.name, err.message);
    return sale;
  }

  async find(options?: FindManyOptions<Sale>): Promise<Sale[]> {
    const sales = this.salesRepository.find(options);
    return sales;
  }

  async findOne(options: FindOneOptions<Sale>): Promise<Sale> {
    const sale = await this.salesRepository.findOne(options);
    if (!sale) throw new NotFoundException('Sale not found');
    return sale;
  }
}
