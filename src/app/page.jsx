<<<<<<< HEAD
=======
'use client'
>>>>>>> 442f0db594a2c7ae896a3360c62cfb39d0c0ff29
import NavBar from '../../components/navBar';
import LoginForm from '../../components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const session= await getServerSession(authOptions);
  if (session){
    return redirect('/dashboard')
  }
  return (
    <div>
      <NavBar />
      <section id="inicio" className="text-white h-screen bg-black  text-center flex">
          <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">Inicio</h1>
      </section>
      <section id="tienda" className=" text-white h-screen bg-purple-900 flex">
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">CONTENIDO Tienda</h1>
      </section>
      {/* <section id="miPerfil" className=" text-white h-screen bg-purple-900 flex">
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">REGISTRATE</h1>
      </section> */}

    </div>
    
    
  )
}
