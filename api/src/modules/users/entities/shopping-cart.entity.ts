import { ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ShoppingCartItem } from './shopping-cart-item.entity';
import { User } from './user.entity';

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiPropertyOptional({ type: () => User })
  @OneToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;

  @ApiPropertyOptional({ type: () => ShoppingCartItem, isArray: true })
  @OneToMany(() => ShoppingCartItem, (item) => item.shoppingCart, { eager: true })
  items: ShoppingCartItem[];

  get isEmpty(): boolean {
    return this.items.length === 0;
  }
}
