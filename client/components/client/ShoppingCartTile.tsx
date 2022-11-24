"use client";
import { API_ENDPOINTS, ShoppingCart, ShoppingCartItem } from "@/shared";
import { ChangeEvent, useState } from "react";

const deleteShoppingCartItemById = async (id: number, token: string) => {
  const res = await fetch(API_ENDPOINTS.SHOPPING_CART.ITEM, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ shoppingCartItemId: id }),
  });
  if (res.ok) return true;
  return false;
};

const updateShoppingCartItemById = async (id: number, amount: number, token: string): Promise<ShoppingCartItem> => {
  const res = await fetch(API_ENDPOINTS.SHOPPING_CART.ITEM, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ shoppingCartItemId: id, amount }),
  });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
  return {} as ShoppingCartItem;
};

export default function ShoppingCartItemTile({
  shoppingCartItem,
  onDelete,
  onUpdate,
}: {
  shoppingCartItem: ShoppingCartItem;
  onDelete: (shoppingCartItem: ShoppingCartItem) => void;
  onUpdate: (shoppingCartItem: ShoppingCartItem) => void;
}) {
  const [shoppingCartItemState, setShoppingCartItemState] = useState(shoppingCartItem);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("authToken") as string;

  const deleteShoppingCartItem = async () => {
    const res = await deleteShoppingCartItemById(shoppingCartItemState.id, token);
    if (res) onDelete(shoppingCartItemState);
  };

  const updateShoppingCartItem = async (amount: number) => {
    setLoading(true);
    const res = await updateShoppingCartItemById(shoppingCartItemState.id, amount, token);
    if (res) {
      setShoppingCartItemState({ ...shoppingCartItemState, amount });
      onUpdate({ ...shoppingCartItemState, amount });
    }
    setLoading(false);
  };

  const increaseAmount = async () => {
    await updateShoppingCartItem(shoppingCartItemState.amount + 1);
  };
  const decreaseAmount = async () => {
    if (shoppingCartItemState.amount > 1) await updateShoppingCartItem(shoppingCartItemState.amount - 1);
  };

  return (
    <tr>
      <td>
        <span>{shoppingCartItem.addedAt}</span>
      </td>
      <td>
        <span>{shoppingCartItem.product.name}</span>
      </td>
      <td>
        <div className="btn-group">
          <button className={`btn btn-square ${loading ? "btn-disabled" : ""}`} onClick={decreaseAmount}>
            -
          </button>
          <span className="btn btn-disabled">
            <span className="text-lg text-white">{shoppingCartItem.amount}</span>
          </span>
          <button className={`btn btn-square ${loading ? "btn-disabled" : ""}`} onClick={increaseAmount}>
            +
          </button>
        </div>
      </td>
      <td>
        <span>{shoppingCartItem.product.price * shoppingCartItem.amount}</span>
      </td>
      <td>
        <button type="button" className="btn btn-square btn-error" onClick={deleteShoppingCartItem}>
          <i className="uil uil-trash-alt text-xl"></i>
        </button>
      </td>
    </tr>
  );
}
