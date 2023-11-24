import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Artistas from '@/models/artista';


export async function GET(){
    try {
        await connectDB();
        const artistas= await Artistas.find();
        return NextResponse.json({
            artistas
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
        const newArtista = new Artistas(data); 
        const respuesta = await newArtista.save();
        return NextResponse.json({
            respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}