// pages/profile.js
'use client'
import { useState, useEffect } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import '../../style/globals.css';
import NavBar from '../../../components/navBar3.0';
export default function ProfilePage() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const [name, setName] = useState(session?.user?.name || '');
  const [email, setEmail] = useState(session?.user?.email || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (session) {
      setName(session.user.name || '');
      setEmail(session.user.email || '');
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // Handle successful response
    } else {
      // Handle error response
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
  if (!session) return <div>Por favor inicia sesion e tu perfils.</div>;
  return (
    <div className="flex items-center justify-center h-screen">
      <div><NavBar/></div>
      <form className="max-w-md mx-auto p-8 bg-purple-100 rounded-md" onSubmit={handleSubmit}>
      <FaUserEdit className="text-4xl mb-4 text-purple-600" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Actualizar Perfil
          </button>
        </div>
      </form>
    </div>
  );
}