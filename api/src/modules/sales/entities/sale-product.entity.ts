import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Product } from '@products/entities';
import { Sale } from './sale.entity';

@Entity()
export class SaleProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => Sale })
  @ManyToOne(() => Sale, (sale) => sale.products)
  sale: Sale;

  @ApiProperty()
  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @ApiProperty()
  @Column()
  amount: number;

  @ApiProperty()
  get total(): number {
    return this.product.price * this.amount;
  }
}
