import './global.css'
import { SignUpForm } from './signup/form'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Crie sua conta
        </h1>
        <SignUpForm />
      </div>
    </main>
  )
}
