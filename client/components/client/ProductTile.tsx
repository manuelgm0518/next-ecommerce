import { API_ENDPOINTS, Product } from "@/shared";

const addToShoppingCart = async (id: number, token: string) => {
  const res = await fetch(API_ENDPOINTS.SHOPPING_CART.ITEM, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: id,
      amount: Number(1),
    }),
  });
  if (res.ok) {
    alert("Agregado al carrito");
    const { data } = await res.json();
    return data;
  }
};

export default function ProductTile({ product }: { product: Product }) {
  const token = localStorage.getItem("authToken") as string;
  const addToCart = async () => {
    const res = await addToShoppingCart(product.id, token);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary gap-3" onClick={addToCart}>
            <i className="uil uil-shopping-cart"></i>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
