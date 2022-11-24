"use client";
import ProductTile from "@/components/client/ProductTile";
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

  return (
    <div className="container mx-auto py-3">
      <div className="grid grid-cols-4 gap-5">
        {products.map((e) => (
          <ProductTile product={e} />
        ))}
      </div>
    </div>
  );
}
