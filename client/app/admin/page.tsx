"use client";

import AddProductTile from "@/components/admin/AddProductTile";
import ProductTile from "@/components/admin/ProductTIle";
import { API_ENDPOINTS, Product } from "@/shared";
import { useEffect, useState } from "react";

const getProducts = async (token: string): Promise<Product[]> => {
  const res = await fetch(API_ENDPOINTS.PRODUCTS.BASE_PATH, { headers: { Authorization: `Bearer ${token}` } });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
  return [];
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([] as Product[]);
  const token = localStorage.getItem("authToken") as string;

  useEffect(() => {
    setLoading(true);
    getProducts(token).then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  const updateItem = (item: Product) => {
    const index = products.findIndex((e) => e.id === item.id);
    const updated = products;
    updated[index] = item;
    setProducts([...products]);
  };

  const removeItem = (id: number) => {
    const index = products.findIndex((e) => e.id === id);
    const deleted = products;
    deleted.splice(index, 1);
    setProducts([...deleted]);
  };

  const addItem = (item: Product) => {
    const added = products;
    added.push(item);
    setProducts([...added]);
  };

  return (
    <div className="container mx-auto py-5">
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Existencias</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <AddProductTile onCreate={(product) => addItem(product)} />
              {products.map((product) => (
                <ProductTile
                  product={product}
                  onDelete={(product) => removeItem(product.id)}
                  onUpdate={(product) => updateItem(product)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
