import { Product } from "./Product";
import { User } from "./User";

export interface ShoppingCartItem {
  id: number;
  addedAt: Date;
  product: Product;
  amount: number;
}

export interface ShoppingCart {
  id: number;
  user: User;
  items: ShoppingCartItem[];
}
