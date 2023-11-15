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
  