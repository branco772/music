import { useState } from "react";
import { signOut } from "next-auth/react";
import { FaUser } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserInfo() {
    const { data: session } = useSession();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="grid place-items-center relative">
            <div className="relative"
                 onMouseEnter={() => setIsDropdownVisible(true)}
                 onMouseLeave={() => setIsDropdownVisible(false)}>
                <FaUser size={45} onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
                {session && (
                    <div className="text-center mt-2">
                        <span className="font-bold">{session.user.name}</span>
                    </div>
                )}
                {isDropdownVisible && session && (
                    <div className="absolute top-0 right-0 bg-black p-4 shadow-md">
                        <div>
                            <strong>Nombre:</strong> {session.user.name}
                        </div>
                        <div>
                            <strong>Correo:</strong> {session.user.email}
                        </div>
                        <button
                            onClick={() => signOut()}
                            className='bg-red-500 text-white font-bold px-6 py-2 mt-3'
                        >
                            Salir
                        </button>
                        <br />
                        <button className='bg-blue-500 text-white font-bold px-6 py-2 mt-3'>
                            <Link href="/update">
                                Modificar
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}