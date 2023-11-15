"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCancion,setNewCancion]=useState({
        titulo:"",
        imagen:"",
        artista:"",
        visible:true,
        orden:'1'
    });

    const router = useRouter();
    //const params = useParams();

    const getCancion = async ()=>{
        const res = await fetch(`/api/cancion/${params.id}`);
        const {canciones} = await res.json();
        console.log(canciones);
        setNewMateria({
            titulo:canciones.titulo,
            imagen:canciones.imagen,
            artista:canciones.artista,
            visible:canciones.visible,
            orden:canciones.orden
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la cancion ${newCancion.titulo}`)){
            try {
                const res=await fetch(`/api/cancion/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/cancion');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCancion()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCancion.titulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Cancion
            </button>
    </div>
)
}
export default HomePage