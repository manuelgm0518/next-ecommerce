import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionController, ShoppingCartController, UsersController } from './controllers';
import { SessionService, ShoppingCartService, UsersService } from './services';
import { ShoppingCart, ShoppingCartItem, User } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, ShoppingCart, ShoppingCartItem])],
  controllers: [UsersController, SessionController, ShoppingCartController],
  providers: [UsersService, SessionService, ShoppingCartService],
  exports: [UsersService, SessionService, ShoppingCartService],
})
export class UsersModule {}
