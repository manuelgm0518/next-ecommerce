import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import to from 'await-to-js';

import { ProductCreateDto, ProductUpdateDto } from '@products/dto';
import { Product } from '@products/entities';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(dto: ProductCreateDto): Promise<Product> {
    const product = this.productsRepository.create(dto);
    const [err] = await to(this.productsRepository.save(product));
    if (err) throw new ForbiddenException(err.name, err.message);
    return product;
  }

  async find(options?: FindManyOptions<Product>): Promise<Product[]> {
    const products = this.productsRepository.find({ ...options, where: { deleted: false } });
    return products;
  }

  async findOne(options: FindOneOptions<Product>): Promise<Product> {
    const product = await this.productsRepository.findOne(options);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async updateById(id: number, dto: ProductUpdateDto): Promise<Product> {
    const product = await this.productsRepository.preload({ id, ...dto });
    if (!product) throw new NotFoundException('Product not found');
    await this.productsRepository.update({ id }, dto);
    return product;
  }

  async deleteById(id: number): Promise<Product> {
    const product = await this.productsRepository.preload({ id, deleted: true });
    if (!product) throw new NotFoundException('Product not found');
    await this.productsRepository.update({ id }, { deleted: true });
    return product;
  }
}
