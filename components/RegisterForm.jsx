"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from "next/link";
export default function RegisterForm () {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");

      const router = useRouter();

      const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (!name || !email || !password) {
          setError("Todos los campos son obligatorios");
          return;
        } 
        try {

          const resuserExists= await fetch('api/userExists',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email
            })
          });
          
          const {user} =  await resuserExists.json();

          if (user){
            setError("El usuario ya existe");
            return;
          }

          const res = await fetch('api/register',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name,
              email,
              password
            })
          });
          if (res.ok){
            const form =e.target;
            form.reset();
            router.push("/")
          }else{
            console.log("Registro fallido")
          }
        } catch (error) {
          console.log("Error durante el registro", error)
        }
      };
    return  <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4">Registrarse</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre Completo"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Correo Electronico"
        />
        <input
         onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
          Registrarse
        </button>
        { error &&(
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>)
        }

        <Link className="text-sm mt-3 text-right" href={"/login"}>
          Ya tienes cuenta? <span className="underline">Iniciar Sesion</span>
        </Link>
      </form>
    </div>
  </div>
}