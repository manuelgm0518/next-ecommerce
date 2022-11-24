"use client";
import SaleTile from "@/components/admin/SaleTile";
import { API_ENDPOINTS, Sale, ShoppingCart, ShoppingCartItem } from "@/shared";
import { useEffect, useState } from "react";

const getSales = async (token: string): Promise<Sale[]> => {
  const res = await fetch(API_ENDPOINTS.SALES.BASE_PATH, { headers: { Authorization: `Bearer ${token}` } });
  if (res.ok) {
    const { data } = await res.json();
    return data;
  }
  return [] as Sale[];
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([] as Sale[]);
  const token = localStorage.getItem("authToken") as string;

  useEffect(() => {
    setLoading(true);
    getSales(token).then((sales) => {
      setItems(sales);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto py-5">
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Vendido el</th>
              <th>Vendido a</th>
              <th>Artículos</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <SaleTile sale={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
