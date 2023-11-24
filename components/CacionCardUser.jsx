'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link"

function CancionCard({cancion}) {
  const handleAddToCart = () => {
    alert('Se ha agregado a su compra');
  };

  return (
    <div className="mt-5 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2" >
        <div className="">
          <h1 className="font-black text-2xl">{cancion.titulo}</h1>
          <h1 className=" text-xl">{cancion.artista}</h1>
        </div>
        <div className="space-between mt-5 text-right">
          <button onClick={handleAddToCart} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Agregar al carrito</button>
          
        </div>
    </div>
  )
}

export default CancionCard;