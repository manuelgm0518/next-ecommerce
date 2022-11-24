"use client";
import { API_ENDPOINTS, Product } from "@/shared";
import { ChangeEvent, useState } from "react";

const createProduct = async (product: Product, token: string) => {
  const res = await fetch(API_ENDPOINTS.PRODUCTS.BASE_PATH, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
    }),
  });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
};

export default function AddProductTile({ onCreate }: { onCreate: (product: Product) => void }) {
  const [productState, setProductState] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 1,
  } as Product);
  const token = localStorage.getItem("authToken") as string;

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: typeof productState[keyof typeof productState] = event.target.value;
    setProductState({ ...productState, [event.target.id]: value });
  };

  const createItem = async () => {
    const res = await createProduct(productState, token);
    if (res) onCreate(productState);
  };

  return (
    <tr>
      <th></th>
      <td>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className="input bg-base-200 w-full my-2"
          onChange={onFieldChange}
        />
      </td>
      <td>
        <input
          id="description"
          type="text"
          placeholder="Descripción"
          className="input bg-base-200 w-full my-2"
          onChange={onFieldChange}
        />
      </td>
      <td>
        <input
          id="price"
          type="number"
          placeholder="Precio"
          className="input bg-base-200 w-full my-2"
          onChange={onFieldChange}
        />
      </td>
      <td>
        <input
          id="stock"
          type="number"
          placeholder="Existencias"
          className="input bg-base-200 w-full my-2"
          onChange={onFieldChange}
        />
      </td>
      <td>
        <button type="button" className="btn btn-success gap-3" onClick={createItem}>
          <i className="uil uil-save text-xl"></i>
          Agregar
        </button>
      </td>
    </tr>
  );
}
