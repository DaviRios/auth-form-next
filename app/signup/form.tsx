'use client'

import { signup } from '@/app/signup/actions'
import { useActionState } from 'react'

export function SignUpForm() {
    const [state, action] = useActionState(signup, null, {})

    return (
        <form action={action}>
            <input name='name' placeholder='Name' />
            {state?.errors?.name && <p>{state.errors.name}</p>}

            <input name='email' placeholder='Email' />
            {state?.errors?.email && <p>{state.errors.email}</p>}

            <input name='password' type='password' placeholder='Password' />
            {state?.errors?.password && <p>{state.errors.password}</p>}

            <button type='submit'>Sign Up</button>
        </form>
    )
}
