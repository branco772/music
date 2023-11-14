import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Pedidos from '@/models/pedido';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id=params.id;
        const pedidos= await Pedidos.findById(id);
        if (!pedidos) {
            return NextResponse({
                mensaje:"Pedido no encontrada"
            }, {status:400})
        }
        return NextResponse.json({
        pedidos
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}

export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id=params.id;
        const pedidos= await Pedidos.deleteOne({_id:id});
        if (!pedidos) {
            return NextResponse({
                mensaje:"Pedido no encontrada"
            }, {status:400})
        }
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
        const respuesta = await newPedido.save();
        console.log(data);
        return NextResponse.json({
        respuesta
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
        const id=params.id; 
        const pedidoUpdated=await Pedidos.findByIdAndUpdate(id,data,{new:true});
        if (!pedidoUpdated) {
            return NextResponse({
                mensaje:"Pedido no encontrada"
            }, {status:400})
        }
        console.log(data);
        return NextResponse.json({
        pedidoUpdated
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
