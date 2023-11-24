
import Link from "next/link";
import NavBar from "../../../components/navBar";
import ArtistaCard from "../../../components/ArtistaCard";

export const feachArtistas=()=>{
   return fetch('http://localhost:3000/api/artista',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Artistas(){
    const {artistas}= await feachArtistas();
    console.log(artistas);
    return(
        <div className="m-20 mt-48">
            <NavBar/>
            <h1 className="text-purple-700 text-6xl font-black">Artistas</h1>
            <Link href='/artista/new' className="text-3xl font-black">Nuevo Artista</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    artistas.map(artista=>(
                        <ArtistaCard key={artista._id} artista={artista}  className="bg-white p-10 mt-5 text-black rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}