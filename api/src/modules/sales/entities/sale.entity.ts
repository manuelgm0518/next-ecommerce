import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { User } from '@users/entities';
import { SaleProduct } from './sale-product.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @CreateDateColumn()
  soldAt: Date;

  @ApiProperty()
  soldTo: User;

  @ApiProperty({ type: () => SaleProduct, isArray: true })
  @OneToMany(() => SaleProduct, (product) => product.sale, { eager: true })
  products: SaleProduct[];

  @ApiProperty()
  get totalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.total, 0);
  }
}
