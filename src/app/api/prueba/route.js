import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongoose";

export function GET(){
    connectDB();
    return NextResponse.json({
        mensaje:"HOLA MUNDO"
    })
}