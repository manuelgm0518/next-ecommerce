"use client";
import { API_ENDPOINTS } from "@/shared";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface LogInProps {
  toSignUp: () => void;
}

async function logIn(email: string, password: string) {
  const res = await fetch(API_ENDPOINTS.SESSION.LOG_IN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    console.error("Failed to fetch data");
    alert("Usuario y/o contraseña incorrectos");
  } else {
    const { data } = await res.json();
    if (typeof window !== "undefined") {
      localStorage.setItem("user", data.user);
      localStorage.setItem("authToken", data.authToken);
    }
    return data;
  }
}

export default function LogIn(props: LogInProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: typeof formState[keyof typeof formState] = event.target.value;
    setFormState({ ...formState, [event.target.id]: value });
  };

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const res = await logIn(formState.email, formState.password);
    if (res) router.replace(res.user.roles.includes("admin") ? "/admin" : "/client");
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogIn}>
      <h2 className="text-2xl font-bold my-2">Inciar Sesión</h2>
      <input
        id="email"
        type="text"
        placeholder="Correo electrónico"
        className="input bg-base-200 w-full my-2"
        onChange={onFieldChange}
      />
      <div className="input-group my-2">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          className="input bg-base-200 w-full"
          onChange={onFieldChange}
        />
        <button type="button" className="btn btn-square" onClick={() => setShowPassword(!showPassword)}>
          <i className={showPassword ? "uil uil-eye" : "uil uil-eye-slash"}></i>
        </button>
      </div>
      <div className="divider"></div>
      <button className="btn btn-block btn-primary">Continuar</button>
      <span className="flex justify-center my-3 gap-2">
        ¿Todavía no tienes cuenta?
        <a className={`link link-primary ${loading ? "loading" : ""}`} onClick={props.toSignUp}>
          Crear cuenta
        </a>
      </span>
    </form>
  );
}
