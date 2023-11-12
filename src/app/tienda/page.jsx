import { NextResponse } from "next/server";
import { connectDB } from "../../libs/mongoose";
import NavBar from "../../../components/navBar";

export default function GET(){
    return(
        <div> 
            <NavBar/>
            
        </div>
    );
}