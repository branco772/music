"use client";
import  {signOut } from "next-auth/react"
import { FaUser } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserInfo(){
    const { data: session } = useSession();

    return (
        <div className="grid place-items-center ">
            <div className="absolute top-0 right-0">
                <FaUser size={45}/>
                <div>
                Nombre: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                Correo: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button 
                onClick={()=> signOut ( )}
                className='bg-red-500 text-white font-bold px-6 py-2 mt-3'>
                    Salir
                </button>
                <br />
                <button className='bg-blue-500 text-white font-bold px-6 py-2 mt-3'>
                    Moidificar
                </button>
            </div>
        </div>
    );
}