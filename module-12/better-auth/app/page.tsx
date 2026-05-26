import Image from "next/image";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-guard";
import LogoutButton from "@/components/logout-button";
async function Home() {
  const session = await requireAuth();

  const {user} = session;
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900 text-white space-y-5">
      <Image src={user.image!} alt="userimage" className=" object-contain rounded-full" height={70} width={70}/>
      <h2 className="text-3xl font-bold mt-5">{user.name}</h2>
      <p className="text-xl font-semibold text-zinc-200">{user.email}</p>
      <LogoutButton />
    </div>
  );
}

export default Home;