"use client";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FaLock } from 'react-icons/fa';
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Credenciales invalidas");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
  className="grid place-items-center h-screen"
>
  <div
className="shadow-lg p-5 rounded-lg border-t-4 border-purple-500 mx-auto w-full max-w-md"
>
    <h1 className="text-center text-xl font-bold my-4">Iniciar Sesion</h1>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        type="email"
        placeholder="Correo Electronico"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 pr-10" // Ajuste de los paddings para dar espacio al icono

      />
   
      <button
className="bg-violet-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-violet-700 transition-colors"
>
        Iniciar Sesion
      </button>
      {error && (
        <div
          className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2"
        >
          {error}
        </div>
      )}

      <Link className="text-sm mt-3 text-right" href={"/register"}>
        No tienes una cuenta? <span className="underline">Registrarse</span>
      </Link>
    </form>
    </div>
  </div>
</div>

  );
}