import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: "Product's name" })
  @Column()
  name: string;

  @ApiProperty({ description: 'A brief description of the product' })
  @Column()
  description: string;

  @ApiProperty({ description: 'The unit price of the product', default: 0 })
  @Column()
  price: number;

  @ApiProperty({ description: 'How many products of this type are in existence' })
  @Column()
  stock: number;
}
