import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Pedidos from '@/models/pedido';

export async function GET(){
    try {
        await connectDB();
        const pedidos= await Pedidos.find();
        return NextResponse.json({
        pedidos
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
        const newPedido = new Pedidos(data); 
        const respuesta = await newPedido``.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}