import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Canciones from '@/models/cancion';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const canciones= await Canciones.findById(id);

        if(!canciones){
            return NextResponse({
                mensaje:"Cancion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        canciones
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
        const canciones= await Canciones.deleteOne({'_id':id});
        
        if(!canciones){
            return NextResponse({
                mensaje:"Cancion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        canciones
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
        const cancionUpdated=await Canciones.findByIdAndUpdate(id,data,{new:true});
        
        if(!cancionUpdated){
            return NextResponse({

                mensaje:"Cancion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            cancionUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}