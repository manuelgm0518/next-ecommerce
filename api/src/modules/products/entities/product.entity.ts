import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive, IsString, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: "Product's name" })
  @IsString()
  @Column()
  name: string;

  @ApiProperty({ description: 'A brief description of the product' })
  @IsString()
  @Column()
  description: string;

  @ApiProperty({ description: 'The unit price of the product', default: 0.0 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Column()
  price: number;

  @ApiProperty({ description: 'How many products of this type are in existence' })
  @IsInt()
  @Min(0)
  @Column()
  stock: number;

  @Column({ default: false })
  deleted: boolean;
}
