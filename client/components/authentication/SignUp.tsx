"use client";
import { useState } from "react";

interface SignUpProps {
  toLogIn: () => void;
}

export default function SignUp(props: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <h2 className="text-2xl font-bold my-2">Crear Cuenta</h2>

      <div className="form-control">
        <input type="text" placeholder="Nombre" className="input bg-base-200 w-full my-2" />
        <input type="text" placeholder="Apellido(s)" className="input bg-base-200 w-full my-2" />
        <input type="text" placeholder="Correo electrónico" className="input bg-base-200 w-full my-2" />
        <div className="input-group my-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="input bg-base-200 w-full"
          />
          <button className="btn btn-square" onClick={() => setShowPassword(!showPassword)}>
            <i className={showPassword ? "uil uil-eye" : "uil uil-eye-slash"}></i>
          </button>
        </div>
        <div className="input-group my-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmar contraseña"
            className="input bg-base-200 w-full"
          />
          <button className="btn btn-square" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            <i className={showConfirmPassword ? "uil uil-eye" : "uil uil-eye-slash"}></i>
          </button>
        </div>
      </div>

      <div className="divider"></div>
      <button className="btn btn-block btn-primary">Continuar</button>
      <span className="flex justify-center my-3 gap-2">
        ¿Ya tienes cuenta?
        <a className="link link-primary" onClick={props.toLogIn}>
          Iniciar sesión
        </a>
      </span>
    </>
  );
}
