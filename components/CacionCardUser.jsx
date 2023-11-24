'use client';
import React, { useState } from 'react';

function CancionCard({cancion}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddToCart = () => {
    alert('Se ha agregado a su compra');
    setSelectedSong(cancion); // Store the selected song object
    setSidebarOpen(true); // Open the sidebar
  };

  return (
    <>
      <div className="relative mt-5 text-white bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2" >
          <div className="">
            <h1 className="font-black text-2xl">{cancion.titulo}</h1>
            <h1 className=" text-xl">{cancion.artista}</h1>
          </div>
          <div className="space-between mt-5 text-right">
            <button onClick={handleAddToCart} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Agregar al carrito</button>
            <button onClick={toggleSidebar} className="ml-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Toggle Sidebar</button>
          </div>
          <div className={`fixed right-0 top-0 h-full transition-transform duration-200 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} bg-gray-800 w-64 p-4`}>
            {selectedSong && <div>
              <h2 className="text-white">Canción seleccionada:</h2>
              <p className="text-white">Título: {selectedSong.titulo}</p>
              <p className="text-white">Artista: {selectedSong.artista}</p>
            </div>}
          </div>
      </div>
    </>
  )
}

export default CancionCard;