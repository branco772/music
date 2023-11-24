"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../../../../components/navBar";
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
        setNewCancion({
            titulo:canciones.titulo,
            artista:canciones.artista,
            imagen:canciones.imagen,
            visible:canciones.visible,
            orden:canciones.orden
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newCancion);

        const res = await fetch(`/api/cancion/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newCancion)
        })

        const data = await res.json();
        console.log(data);
        router.push('/tienda');
        router.refresh();
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewCancion({...newCancion,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewCancion({...newCancion,[e.target.name]:e.target.value})
    }

    const handlerImage=(e)=>{
        console.log(e.target.files[0])
        setNewCancion({...newCancion,[e.target.name]:e.target.files[0]})
    }
    useEffect(()=>{
        getCancion()
    },[])

    return(
        <div>
            <NavBar/>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={handlerSubmit}>
                    <input type="text" name="titulo" placeholder="Ingrese Titulo de la cancion" className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2"onChange={handlerChange} value={newCancion.titulo}/>

                    <input type="text" name="artista" placeholder="Ingrese Titulo del artista" className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange} value={newCancion.artista}/>

                    <input type="file" name="imagen" placeholder="seleccione una imagen" className="block text-sm text-gray-900 border border-gray-300 rounded-2xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full p-4 my-2" onChange={handlerImage} />
                    
                    
                    <label className="relative inline-flex items-center cursor-pointer my-1">
                        <input name="visible" type="checkbox" checked={newCancion.visible} class="sr-only peer" onChange={handlerChangeToggle}/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
                    </label>
                    
                    <input type="text" name="orden" placeholder="asignar un orden 1,2,3,4"
                    className="text-black bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 text-lg rounded-2xl  w-full  p-4  my-2"
                    onChange={handlerChange} value={newCancion.orden}/>
                    <button type="submit"
                    className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >Modificar Cancion</button>
                </form>
            </div>
        </div>
    )
}
export default HomePage