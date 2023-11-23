import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
//import {FontAwesomeIcon} from "@fo"

import Link from "next/link"
function CancionCard({cancion}) {
  return (
    <div className="mt-5 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2" >
        <div className="">
          <h1 className="font-black text-2xl">{cancion.titulo}</h1>
          <h1 className=" text-xl">{cancion.artista}</h1>
          
        </div>
        <div className="space-between mt-5 text-right">
          <Link href={`/tienda/${cancion._id}/delete`} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Borrar</Link>
          <Link href={`/tienda/${cancion._id}/update`} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Actualizar</Link>
        </div>
    </div>
  )
}

export default CancionCard