import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AutoButtonServer } from './components/auth-button-server'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase.from('posts').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AutoButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  )
}
