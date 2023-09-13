import Link from 'next/link'
import AuthButtonClient from './auth-button-client'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='container mx-auto flex flex-row items-center justify-between py-4'>
      <Link href="/">
        Home
      </Link>

      <div className='flex flex-row items-center gap-4'>
        <AuthButtonClient />
        <Link href="/protected">
          Protected
        </Link>
        <Link href="/serveraction">
          Server Action
        </Link>
      </div>
    </nav>
  )
}

export default Navbar