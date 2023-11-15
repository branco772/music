<<<<<<< HEAD
import RegisterForm from "../../../components/RegisterForm";
import NavBar from "../../../components/navBar2.0";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Register () {
    const session =await getServerSession(authOptions)

    if (session){
        return redirect('/dashboard')
    }

    

    return  <div>
    <NavBar />
<RegisterForm/>
        </div>
    
=======
import RegisterForm from "../../../components/RegisterForm";
import NavBar from "../../../components/navBar2.0";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Register () {
    const session =await getServerSession(authOptions)

    if (session){
        return redirect('/dashboard')
    }

    

    return  <div>
    <NavBar />
<RegisterForm/>
        </div>
    
>>>>>>> 442f0db594a2c7ae896a3360c62cfb39d0c0ff29
}