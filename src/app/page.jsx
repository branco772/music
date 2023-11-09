"use client";
import Image from 'next/image'
import NavBar from '../../components/navBar'

export default function Home() {
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
    </div>
  )
}
