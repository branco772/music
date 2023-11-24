"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newArtista,setNewArtista]=useState({
        artista:"",
        genero:"",
        descripcion:""
    });

    const router = useRouter();
    //const params = useParams();

    const getArtista = async ()=>{
        const res = await fetch(`/api/artista/${params.id}`);
        const artista = await res.json();
        console.log(artista);
        setNewArtista({
            artista:artista.artista,
            artista:artista.genero,
            artista:artista.descripcion
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el artista ${newArtista.titulo}`)){
            try {
                const res=await fetch(`/api/artista/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/artista');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getArtista()
    },[])

return(
    <div className="bg-white text-black">
        <h1>{params.id}</h1>
            <h1 className="text-black">Eliminar: {newArtista.artista}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Artista
            </button>
    </div>
)
}
export default HomePage