import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Column, OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Authentication } from '@authentication/entities';
import { AuthRole } from '@authentication/constants';
import { Exclude } from 'class-transformer';
import { ShoppingCart } from './shopping-cart.entity';

@Entity()
export class User {
  @ApiProperty({ description: 'User unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: "User's email address" })
  @IsEmail()
  @Column()
  email: string;

  @ApiProperty({ description: "User's first name" })
  @IsString()
  @Column()
  firstName: string;

  @ApiProperty({ description: "User's last name" })
  @IsString()
  @Column()
  lastName: string;

  @ApiPropertyOptional({ type: () => Authentication })
  @Exclude()
  @OneToOne(() => Authentication, { eager: true })
  @JoinColumn()
  authentication?: Authentication;

  @ApiPropertyOptional({ type: () => ShoppingCart })
  @Exclude()
  @OneToOne(() => ShoppingCart)
  @JoinColumn()
  shoppingCart?: ShoppingCart;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get roles(): AuthRole[] {
    return this.authentication?.roles?.map((e) => e.authRole) ?? [];
  }
}
