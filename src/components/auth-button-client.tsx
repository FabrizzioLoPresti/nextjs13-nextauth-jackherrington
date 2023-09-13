"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const AuthButtonClient = (props: Props) => {
  const { data: session, status } = useSession();

  if (session?.user) {
    return (
      <div className="flex flex-row items-center gap-4">
        <p className="font-light text-white">{session.user.name}</p>
        <Image
          src={session?.user?.image ?? ""}
          alt="Image Profile"
          width={32}
          height={32}
          className="rounded-full object-fill"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-800 transition-colors ease-in-out duration-300"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-800 transition-colors ease-in-out duration-300"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default AuthButtonClient;
