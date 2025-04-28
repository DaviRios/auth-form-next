'use client'

import { signup } from '@/app/signup/actions'
import { useActionState } from 'react'
import { inputClassName } from '@/app/signup/styles'

export function SignUpForm() {
    const [state, action, pending] = useActionState(signup)

    return (
        <form action={action}>
            <input name='name' placeholder='Name' className={inputClassName} />  {/* here i use inputClassName to make all inputs standart design */}
            {state?.errors?.name && <p className='text-red-500'>{state.errors.name}</p>}

            <input name='email' placeholder='Email' className={inputClassName} />
            {state?.errors?.email && <p className='text-red-500'>{state.errors.email}</p>}

            <input name='password' type='password' placeholder='Password' className={inputClassName} />
            {state?.errors?.password && (
                <ul className="text-sm text-red-500 list-disc list-inside">   {/* The erros without map will colapse into one string, Using map to list erros */}
                    {state.errors.password.map((err, idx) => (
                        <li key={idx}>{err}</li>
                    ))}
                </ul>
            )}

            <button type='submit' className={inputClassName} disabled={pending}>
            {pending ? 'Subminting...' : 'Sign up'}  {/* The content of button depends of whats happening, if status pending shows Subminting, if not shows Sign up */}
            </button>
            
        </form>
    )
}
