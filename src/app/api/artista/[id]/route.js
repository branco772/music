
import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Artistas from '@/models/artista';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const artistas= await Artistas.findById(id);

        if(!artistas){
            return NextResponse({
                mensaje:"Artista no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        artistas
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}


export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        console.log(id);
        const artistas= await Artistas.deleteOne({'_id':id});
        
        if(!artistas){
            return NextResponse({
                mensaje:"Artista no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        artistas
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}



export async function PUT(request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        const id = params.id; 
        const artistaUpdated=await Artistas.findByIdAndUpdate(id,data,{new:true});
        
        if(!artistaUpdated){
            return NextResponse({

                mensaje:"Artista no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            artistaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}