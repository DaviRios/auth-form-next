import './global.css'
import { SignUpForm } from './signup/form'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Crie sua conta</h1>
        <SignUpForm />
      </div>
    </main>
  )
}
