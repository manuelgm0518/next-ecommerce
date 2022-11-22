import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Product } from '@products/entities';
import { Sale } from './sale.entity';

@Entity()
export class SaleProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  sale: Sale;

  @ApiProperty()
  product: Product;

  @ApiProperty()
  @Column()
  amount: number;

  @ApiProperty()
  get total(): number {
    return this.product.price * this.amount;
  }
}
