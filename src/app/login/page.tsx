import { AutoButtonServer } from '../components/auth-button-server'

export default function LoginPage () {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Iniciar sesión en DevTer</h1>
      <AutoButtonServer />
    </section>
  )
}
