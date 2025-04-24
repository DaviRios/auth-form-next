import { signup } from '@/app/signup/actions'

export function SignUpForm() {
    return (
        <form action={signup}>
            <input name='name'></input>
            <input name='email'></input>
            <input name='password'></input>

            <button>SignUp</button>
        </form>
    )
}