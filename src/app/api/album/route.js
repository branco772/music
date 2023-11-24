import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Canciones from '@/models/cancion';


export async function GET(){
    try {
        await connectDB();
        const canciones= await Canciones.find();
        return NextResponse.json({
            canciones
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newCancion = new Canciones(data); 
        const respuesta = await newCancion.save();
        return NextResponse.json({
            respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}