import CancionCard from "components/CancionCardAlbum";
import Link from "next/link";
import NavBar from "../../../components/navBar";
import CancionCardAlbum from "../../../components/CancionCardAlbum";

export const feachAlbumes=()=>{
   return fetch('http://localhost:3000/api/album',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Albumes(){
    const {albumes}= await feachAlbumes();
    console.log(albumes);
    return(
        <div className="m-20 mt-48">
            <NavBar/>
            <h1 className="text-purple-700 text-6xl font-black">Albumes</h1>
            <Link href='/album/new' className="text-3xl font-black">Nuevo Album</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    albumes.map(album=>(
                        <CancionCardAlbum key={album._id} album={album}  className="bg-white p-10 mt-5 text-black rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}