import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '@users/users.module';
import { SalesController } from './controllers';
import { Sale, SaleProduct } from './entities';
import { SalesService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, SaleProduct]), UsersModule],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService],
})
export class SalesModule {}
