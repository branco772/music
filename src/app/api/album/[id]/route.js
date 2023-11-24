
import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Albumes from '@/models/album';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const albumes= await Albumes.findById(id);

        if(!albumes){
            return NextResponse({
                mensaje:"Album no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        albumes
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
        const albumes= await Albumes.deleteOne({'_id':id});
        
        if(!albumes){
            return NextResponse({
                mensaje:"Album no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        albumes
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
        const albumUpdated=await Albumes.findByIdAndUpdate(id,data,{new:true});
        
        if(!albumUpdated){
            return NextResponse({

                mensaje:"Album no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            albumUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}