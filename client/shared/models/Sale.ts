import { Product } from "./Product";
import { User } from "./User";

export interface SaleProduct {
  id: number;
  product: Product;
  amount: number;
  total: number;
}

export interface Sale {
  soldAt: Date;
  soldTo: User;
  products: SaleProduct[];
  totalPrice: number;
}
