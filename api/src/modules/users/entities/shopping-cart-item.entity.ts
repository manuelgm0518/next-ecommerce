import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@products/entities';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingCart } from './shopping-cart.entity';

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => ShoppingCart })
  @ManyToOne(() => ShoppingCart, (cart) => cart.items)
  shoppingCart: ShoppingCart;

  @ApiProperty()
  @CreateDateColumn()
  addedAt: Date;

  @ApiProperty({ type: () => Product })
  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ApiProperty()
  @Column({ default: 1 })
  amount: number;
}
