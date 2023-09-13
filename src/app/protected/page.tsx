import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"

type Props = {}

export default async function ProtectedPage({}: Props) {
  const session = await getServerSession()

  if(!session || !session.user) {
    return redirect('/api/auth/signin')
  }

  return (
    <section className='container mx-auto'>
      <h3 className='text-4xl font-bold'>Tis is a Protected Route</h3>
      <p>You will only see this if you are autenticated.</p>
    </section>
  )
}