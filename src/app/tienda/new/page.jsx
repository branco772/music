"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";
import NavBar from "../../../../components/navBar";

function page() {
    const [cancion,setCancion] = useState(
        /*{
            titulo:"",
            artista:"",
            imagen:"",
            visible:"",
            orden:""
        }*/
        null
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', cancion.titulo);
        formData.append('artista', cancion.artista);
        formData.append('imagen', cancion.imagen);
        formData.append('visible', cancion.visible);
        formData.append('orden', cancion.orden);
        
        try{
            const res = await fetch(`/api/cancion`, {
                method: 'POST',
                body:formData,
                //JSON.stringify(cancion)
            });
            
            const data = await res.json();
            console.log(data);
            router.push('/tienda');
            router.refresh();
        }catch(error){
            console.error("Error al enviar el formulario:", error);
        }
    };

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setCancion({...cancion,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setCancion({...cancion,[e.target.name]:e.target.value})
    }
    const handlerImage=(e)=>{
        console.log(e.target.files[0])
        setCancion({...cancion,[e.target.name]:e.target.files[0]})
    }
    return (
        <div>
            <NavBar/>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={handlerSubmit} encType="multipart/form-data">
                    <input type="text" name="titulo" placeholder="Ingrese Titulo cancion"className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange}/>
                    <input type="text" name="artista" placeholder="Ingrese nombre del artista"className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange}/>
                    <input type="file" name="imagen" placeholder="seleccione una imagen" className="block text-sm text-gray-900 border border-gray-300 rounded-2xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full p-4 my-2" onChange={handlerImage}/>
                    <label className="relative inline-flex items-center cursor-pointer my-2">
                    <input name="visible" type="checkbox" value="true" className="sr-only peer" onChange={handlerChangeToggle}/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">Visible</span>
                    </label>
                    <input type="text" name="orden" placeholder="Ingrese precio" className="text-black bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 text-lg rounded-2xl  w-full  p-4  my-2" onChange={handlerChange}/>
                    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2" >Registrar Cancion</button>
                </form>
            </div>
        </div>
    )
}

export default page