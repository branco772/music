import CancionCard from "components/CancionCard";
import Link from "next/link";
import NavBar from "../../../components/navBar";

export const feachCanciones=()=>{
   return fetch('http://localhost:3000/api/cancion',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Canciones(){
    const {canciones}= await feachCanciones();
    console.log(canciones);
    return(
        <div className="m-20 mt-48">
            <NavBar/>
            <h1 className="text-purple-700 text-6xl font-black">Canciones</h1>
            <Link href='/tienda/new' className="text-3xl font-black">Nueva Cancion</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    canciones.map(cancion=>(
                        <CancionCard key={cancion._id} cancion={cancion}  className="bg-white p-10 mt-5 text-black rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}