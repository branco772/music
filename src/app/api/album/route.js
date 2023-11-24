import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Albumes from '@/models/album';


export async function GET(){
    try {
        await connectDB();
        const albumes= await Albumes.find();
        return NextResponse.json({
            albumes
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
        const newAlbum = new Albumes(data); 
        const respuesta = await newAlbum.save();
        return NextResponse.json({
            respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}