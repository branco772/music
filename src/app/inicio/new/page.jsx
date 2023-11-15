"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [cancion,setCancion] = useState(
        {
            titulo:"",
            imagen:"",
            artista:"",
            visible:"",
            orden:""
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(cancion);

        const res = await fetch('/api/cancion',{
            method:'POST',
            body:JSON.stringify(cancion)
        })

        const data = await res.json();
        console.log(data);
        router.push('/cancion');
        router.refresh();
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setCancion({...cancion,[e.target.name]:e.target.value})
    }
    return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={handlerSubmit}>
            <input type="text" name="titulo" placeholder="Ingrese Titulo cancion" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg w-full p-4 my-1" onChange={handlerChange}/>
            <input type="text" name="imagen" placeholder="seleccione una imagen" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1" onChange={handlerChange}/>
            <input type="text" name="artista" placeholder="Ingrese nombre del artista" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1" onChange={handlerChange}/>
            <input type="text" name="visible" placeholder="La cancion sera visible" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1" onChange={handlerChange}/>
            <input type="text" name="orden" placeholder="asignar un orden 1,2,3,4" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1" onChange={handlerChange}/>
            <button type="submit" className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Registrar Materia</button>
        </form>
    </div>
    )
}

export default page