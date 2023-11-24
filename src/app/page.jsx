import NavBar from '../../components/navBar';
import LoginForm from '../../components/LoginForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Principal from '../../components/principal';

export default async function Home() {
  const session= await getServerSession(authOptions);
  if (session){
    return redirect('/dashboard')
  }
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700'>
      <NavBar/>
      <div>
        <Principal/>
      </div>
    </div>
  )
}
