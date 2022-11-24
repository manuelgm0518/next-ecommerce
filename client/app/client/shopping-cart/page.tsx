"use client";
import ShoppingCartItemTile from "@/components/client/ShoppingCartTile";
import { API_ENDPOINTS, ShoppingCart, ShoppingCartItem } from "@/shared";
import { useEffect, useState } from "react";

const getShoppingCart = async (token: string): Promise<ShoppingCart> => {
  const res = await fetch(API_ENDPOINTS.SHOPPING_CART.BASE_PATH, { headers: { Authorization: `Bearer ${token}` } });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
  return {
    id: 0,
    user: {},
    items: [] as ShoppingCartItem[],
  } as ShoppingCart;
};

const makeSell = async (token: string) => {
  const res = await fetch(API_ENDPOINTS.SALES.BASE_PATH, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
};

const getTotal = (items: ShoppingCartItem[]) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.amount, 0);
  return total;
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as ShoppingCartItem[]);
  const token = localStorage.getItem("authToken") as string;

  useEffect(() => {
    setLoading(true);
    getShoppingCart(token).then((cart) => {
      setItems(cart.items);
      setLoading(false);
    });
  }, []);

  const removeItem = (id: number) => {
    const index = items.findIndex((e) => e.id === id);
    const deleted = items;
    deleted.splice(index, 1);
    setItems([...deleted]);
  };

  const updateItem = (item: ShoppingCartItem) => {
    const index = items.findIndex((e) => e.id === item.id);
    const updated = items;
    updated[index] = item;
    setItems([...updated]);
  };

  const sell = async () => {
    const res = await makeSell(token);
    if (res) {
      alert("Compra realizada");
      getShoppingCart(token).then((cart) => setItems(cart.items));
    }
  };

  return (
    <div className="container mx-auto py-5">
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <div className="overflow-x-auto">
          <button className="btn btn-primary m-3" onClick={sell}>
            Comprar: ${getTotal(items)}
          </button>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Agregado el</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <ShoppingCartItemTile
                  shoppingCartItem={item}
                  onDelete={(item) => removeItem(item.id)}
                  onUpdate={(item) => updateItem(item)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
