import { Sale } from "@/shared";

const getTotal = (sale: Sale) => {
  const total = sale.products.reduce((sum, product) => sum + product.amount * product.product.price, 0);
  return total;
};

export default function SaleTile({ sale }: { sale: Sale }) {
  const token = localStorage.getItem("authToken") as string;

  return (
    <tr>
      <td>
        <span>{sale.soldAt}</span>
      </td>
      <td>
        <span>{sale.soldTo.email}</span>
      </td>
      <td>
        <span>{sale.products.length}</span>
      </td>
      <td>
        <span>{getTotal(sale)}</span>
      </td>
    </tr>
  );
}
