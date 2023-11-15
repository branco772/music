<<<<<<< HEAD
"use client";

import {SessionProvider} from "next-auth/react";

export const AuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
=======
"use client";

import {SessionProvider} from "next-auth/react";

export const AuthProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
>>>>>>> 442f0db594a2c7ae896a3360c62cfb39d0c0ff29
};