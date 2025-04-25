import { SignUpForm } from '@/app/signup/form'

export default function SignupPage() {
  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6">Crie sua conta</h1>
            <SignUpForm />
          </div>
        </main>
      </body>
    </html>
  )
}
