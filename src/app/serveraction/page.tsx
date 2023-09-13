import ServerActionButton from "@/components/server-action-button"
import { whoAmI } from "@/actions/actions"

type Props = {}

export default function ServerActionPage({}: Props) {
  return (
    <section className='container mx-auto'>
      <h3 className='text-4xl font-bold'>Server Action</h3>
      <p>Click the button below to trigger a server action.</p>
      <ServerActionButton whoAmIAction={whoAmI} />
    </section>
  )
}