'use client'

import { signup } from '../signup/actions'
import { useActionState } from 'react'
import { inputClassName } from '../signup/styles'

type FormState = {
  errors: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
}

export function SignUpForm() {
  const initialState: FormState = { errors: {} }
  const [state, action, pending] = useActionState(signup, initialState)

  return (
    <form action={action} className="space-y-4">
      <div>
        <input
          name="name"
          placeholder="Nome"
          className={inputClassName}
          aria-invalid={!!state?.errors?.name}
        />
        {state?.errors?.name && (
          <p className="text-red-500 text-sm">{state.errors.name.join(', ')}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          placeholder="E-mail"
          className={inputClassName}
          aria-invalid={!!state?.errors?.email}
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email.join(', ')}</p>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="Senha"
          className={inputClassName}
          aria-invalid={!!state?.errors?.password}
        />
        {state?.errors?.password && (
          <ul className="text-sm text-red-500 list-disc list-inside space-y-1">
            {state.errors.password.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
      >
        {pending ? 'Enviando...' : 'Criar conta'}
      </button>
    </form>
  )
}
