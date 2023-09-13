import { headers } from 'next/headers'
import { getServerSession } from "next-auth/next";

const fetchData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/whoAmI`, {
    method: "GET",
    headers: headers()
  });
  const data = await res.json();
  return data
};

export default async function Home() {
  const session = await getServerSession();
  const { name } = await fetchData();
  return (
    <main className="container mx-auto">
      getServerSession Result:
      {session?.user ? (
        <div>
          <p>Signed in as: {session.user.email}</p>
         
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
        </div>
      )}
      <p>Server Action Result: <code>{name}</code></p>
    </main>
  );
}
