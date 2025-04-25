'use client'

import { signup } from '@/app/signup/actions'

export function SignUpForm() {
    // const [state, action] = userActionState(signup)

    return (
        <form action={signup}>
            <input name='name'></input>
            {/* verify erros in name,email and password and add to state */}
            {/* {state?.erros?.name && <p>{state.errors.name}</p>}  */}
            <input name='email'></input>
            {/* {state?.erros?.email && <p>{state.errors.email}</p>} */}
            <input name='password'></input>
            {/* {state?.erros?.password && <p>{state.errors.password}</p>} */}

            <button>SignUp</button>
        </form>
    )
}