"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newAlbum,setNewAlbum]=useState({
        titulo:"",
        artista:"",
        visible:true,
    });

    const router = useRouter();
    //const params = useParams();

    const getAlbum = async ()=>{
        const res = await fetch(`/api/album/${params.id}`);
        const albumes = await res.json();
        console.log(albumes);
        setNewAlbum({
            titulo:albumes.titulo,
            artista:albumes.artista,
            visible:albumes.visible,
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el album ${newAlbum.titulo}`)){
            try {
                const res=await fetch(`/api/album/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/album');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getAlbum()
    },[])

return(
    <div className="bg-white text-black">
        <h1>{params.id}</h1>
            <h1 className="text-black">Eliminar: {newAlbum.titulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Album
            </button>
    </div>
)
}
export default HomePage