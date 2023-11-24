"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";
import NavBar from "../../../../components/navBar";

function page() {
    const [artista,setArtista] = useState(
        {
            artista:"",
            genero:"",
            descripcion:""
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch(`/api/artista`, {
                method: 'POST',
                body:JSON.stringify(artista),
                //formData
            });
            
            const data = await res.json();
            console.log(data);
            router.push('/artista');
            router.refresh();
        }catch(error){
            console.error("Error al enviar el formulario:", error);
        }
    };

    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setArtista({...artista,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setArtista({...artista,[e.target.name]:e.target.value})
    }
    const handlerImage=(e)=>{
        console.log(e.target.files[0])
        setArtista({...artista,[e.target.name]:e.target.files[0]})
    }
    return (
        <div>
            <NavBar/>
            <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={handlerSubmit} encType="multipart/form-data">
                    <input type="text" name="artista" placeholder="Ingrese artista"className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange}/>
                    <input type="text" name="genero" placeholder="Ingrese el genero"className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange}/>
                    <input type="text" name="descripcion" placeholder="Ingrese una descripcion"className="bg-gradient-to-r from-green-100 via-purple-300 to-purple-900 border border-gray-300 text-gray-900 text-lg rounded-2xl w-full p-4 my-2" onChange={handlerChange}/>
                    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2" >Registrar Artista</button>
                </form>
            </div>
        </div>
    )
}

export default page