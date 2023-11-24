"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../../../../components/navBar";
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
        const {albumes} = await res.json();
        console.log(albumes);
        setNewAlbum({
            titulo:albumes.titulo,
            artista:albumes.artista,
            visible:albumes.visible,
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newAlbum);

        const res = await fetch(`/api/album/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newAlbum)
        })

        const data = await res.json();
        console.log(data);
        router.push('/album');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la cancion ${newAlbum.titulo}`)){
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewAlbum({...newAlbum,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewAlbum({...newAlbum,[e.target.name]:e.target.value})
    }

    const handlerImage=(e)=>{
        console.log(e.target.files[0])
        setNewAlbum({...newAlbum,[e.target.name]:e.target.files[0]})
    }
    useEffect(()=>{
        getAlbum()
    },[])

    return(
        <div>
            <NavBar/>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={handlerSubmit}>
                    <input type="text" name="titulo" placeholder="Ingrese Titulo de la cancion" className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2"onChange={handlerChange} value={newAlbum.titulo}/>

                    <input type="text" name="artista" placeholder="Ingrese Titulo del artista" className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange} value={newAlbum.artista}/>

                    <label className="relative inline-flex items-center cursor-pointer my-1">
                        <input name="visible" type="checkbox" checked={newAlbum.visible} class="sr-only peer" onChange={handlerChangeToggle}/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
                    </label>
                    <button type="submit"
                    className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >Modificar Album</button>
                </form>
            </div>
        </div>
    )
}
export default HomePage