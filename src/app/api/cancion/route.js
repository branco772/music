import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Canciones from '@/models/cancion';
import { writeFile } from "fs/promises";
import path from 'path'
import {v2 as cloudinary} from 'cloudinary';

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

/*export async function POST(request){
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
}*/
cloudinary.config({ 
  cloud_name: 'dbiwesxp2', 
  api_key: '498519598984581', 
  api_secret: '6HMRnEm4CvW4lm8AzDdgtpTcf70' 
});

export async function POST(request){
    await connectDB();
    const formData= await request.formData();
    // Extraer los campos de formData según su nombre
    const titulo = formData.get('titulo');
    const artista = formData.get('artista');
    var imagen= formData.get('imagen');
    const visible= formData.get('visible');
    const orden=formData.get('orden');
    // ...
    const bytes= await imagen.arrayBuffer();
    const buffer= Buffer.from(bytes);

    const  filePath= path.join(process.cwd(), "public", imagen.name);
    await writeFile(filePath, buffer)
    
    const response = await cloudinary.uploader.upload(filePath)
    /*const response = await new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream({},(err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        }).end(buffer);
    })*/

    console.log(response)
    imagen= response.secure_url
    // Crear un objeto con los datos extraídos
    const data = {
        titulo,
        artista,
        imagen,
        visible,
        orden,
        // ...
    };
    console.log(data);
    const newCancion=new Canciones(data);
    const respuesta= await newCancion.save();
    return NextResponse.json(respuesta)
}