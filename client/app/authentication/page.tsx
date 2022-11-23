"use client";
import { LogIn, SignUp } from "@/components/authentication";
import { useState } from "react";

export default function Page() {
  const [isLogIn, setIsLogIn] = useState(true);
  const showLogIn = (value: boolean) => setIsLogIn(value);

  return (
    <div className="grid h-screen w-screen place-content-center">
      <div className="card w-96 bg-base-100 shadow-xl p-5">
        {isLogIn ? <LogIn toSignUp={() => showLogIn(false)} /> : <SignUp toLogIn={() => showLogIn(true)} />}
      </div>
    </div>
  );
}
