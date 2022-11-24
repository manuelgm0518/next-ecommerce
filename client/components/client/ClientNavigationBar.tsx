"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavigationBar() {
  const router = useRouter();

  const closeSession = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
    }
    router.replace("/authentication");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start text-xl font-bold">Abarrotes</div>
      <div className="navbar-center normal-case text-center">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/client">Productos</Link>
          </li>
          <li>
            <Link href="/client/purchases">Compras</Link>
          </li>
          <li>
            <Link href="/client/shopping-cart">Carrito</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error btn-sm gap-3" onClick={() => closeSession()}>
          <i className="uil uil-signout"></i>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
