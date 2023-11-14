'use client'
import { getServerSession } from 'next-auth';
import NavBar from '../../components/navBar';
import { authOptions } from './api/auth/[...nextauth]/route';
import User from './components/user';
// import client from './libs/prismadb';


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <NavBar />
        <section id="inicio" className="text-white h-screen bg-black  text-center flex">
            <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">Inicio</h1>
        </section>
        <section id="tienda" className=" text-white h-screen bg-purple-900 flex">
            <h1 className="m-auto font-waterfall text-7xl text-white font-bold">Tienda</h1>
        </section>
        <section id="miPerfil" className=" text-white h-screen bg-purple-900 flex">
            <h1 className="m-auto font-waterfall text-7xl text-white font-bold">Mi perfil</h1>
        </section>
        <section>
        <h1>Home</h1>
        <h1>Server Side Rendered</h1>
        <pre>{JSON.stringify(session)}</pre>
        <h1>Client Side Rendered</h1>
        <User />
      </section>
    </div>
  )
}
