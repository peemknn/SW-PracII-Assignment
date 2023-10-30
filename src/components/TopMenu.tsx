import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-14 fixed bg-white left-0 top-0 right-0 z-30 border border-y-1 border-solid border-slate-400 flex flex-row-reverse ">
      <Link href="/">
        <Image
          src={"/img/logo.png"}
          className="h-[100%] w-[100px]"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>

      <TopMenuItem title="Booking" pageRef="/booking" />
      <TopMenuItem title="About" pageRef="/about" />
      <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
        {session ? (
          <Link href="/api/auth/signout">Sign-Out of {session.user?.name}</Link>
        ) : (
          <Link href="/api/auth/signin">Sign-In</Link>
        )}
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
      </div>
    </div>
  );
}
