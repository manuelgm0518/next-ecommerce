import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ProductsModule } from '@products/products.module';
import { UsersModule } from '@users/users.module';
import { ShoppingCartController } from './modules/users/controllers/shopping-cart/shopping-cart.controller';

@Module({
  imports: [CoreModule, UsersModule, ProductsModule],
  controllers: [ShoppingCartController],
  providers: [],
})
export class AppModule {}
