<<<<<<< HEAD
import NavBar from '../../../components/navBar2.0';
import LoginForm from '../../../components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Home() {
    const session= await getServerSession(authOptions);
    if (session){
      return redirect('/dashboard')
    }
    return (
      <div>
        <NavBar />
  
        <main>
          <LoginForm />
        </main>
      </div>
      
      
    )
  }
=======
import NavBar from '../../../components/navBar2.0';
import LoginForm from '../../../components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Home() {
    const session= await getServerSession(authOptions);
    if (session){
      return redirect('/dashboard')
    }
    return (
      <div>
        <NavBar />
  
        <main>
          <LoginForm />
        </main>
      </div>
      
      
    )
  }
>>>>>>> 442f0db594a2c7ae896a3360c62cfb39d0c0ff29
  