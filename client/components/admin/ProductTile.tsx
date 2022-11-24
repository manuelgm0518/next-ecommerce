"use client";
import { API_ENDPOINTS, Product } from "@/shared";
import { ChangeEvent, useState } from "react";

const updateProductById = async (id: number, product: Product, token: string) => {
  const res = await fetch(API_ENDPOINTS.PRODUCTS.BASE_PATH + `/${id}`, {
    method: "PATCH",
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

const deleteProductById = async (id: number, token: string) => {
  const res = await fetch(API_ENDPOINTS.PRODUCTS.BASE_PATH + `/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) return true;
  return false;
};

export default function ProductTile({
  product,
  onDelete,
  onUpdate,
}: {
  product: Product;
  onDelete: (product: Product) => void;
  onUpdate: (product: Product) => void;
}) {
  const [name, setName] = useState(product.name);
  const [description, setDesc] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const token = localStorage.getItem("authToken") as string;

  const updateProduct = async () => {
    const state = {
      ...product,
      name,
      description,
      price,
      stock,
    };
    const res = await updateProductById(product.id, state, token);
    if (res) onUpdate(res);
    alert("Producto actualizado");
  };

  const deleteProduct = async () => {
    const state = {
      ...product,
      name,
      description,
      price,
      stock,
    };
    const res = await deleteProductById(product.id, token);
    if (res) {
      alert("Producto eliminado");
      onDelete(state);
    } else {
      alert("Este producto no se puede eliminar. Tiene una venta asociada");
    }
  };

  return (
    <tr>
      <th>{product.id}</th>
      <td>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className="input bg-base-200 w-full my-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          id="description"
          type="text"
          placeholder="Descripción"
          className="input bg-base-200 w-full my-2"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </td>
      <td>
        <input
          id="price"
          type="number"
          placeholder="Precio"
          className="input bg-base-200 w-full my-2"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </td>
      <td>
        <input
          id="stock"
          type="number"
          placeholder="Existencias"
          className="input bg-base-200 w-full my-2"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </td>
      <td>
        <div className="btn-group">
          <button type="button" className="btn btn-square btn-primary" onClick={updateProduct}>
            <i className="uil uil-save text-xl"></i>
          </button>
          <button type="button" className="btn btn-square btn-error" onClick={deleteProduct}>
            <i className="uil uil-trash-alt text-xl"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
