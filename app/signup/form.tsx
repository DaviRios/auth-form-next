'use client'

import { signup } from '../signup/actions';
import { useActionState } from 'react';
import { inputClassName } from '../signup/styles';

type FormState = {
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

export function SignUpForm() {
  const initialState: FormState = { errors: {} };
  const [state, action, pending] = useActionState(signup, initialState);

  return (
    <form action={action}>
      <input name="name" placeholder="Name" className={inputClassName} />
      {state?.errors?.name && <p className="text-red-500">{state.errors.name.join(', ')}</p>}

      <input name="email" placeholder="Email" className={inputClassName} />
      {state?.errors?.email && <p className="text-red-500">{state.errors.email.join(', ')}</p>}

      <input name="password" type="password" placeholder="Password" className={inputClassName} />
      {state?.errors?.password && (
        <ul className="text-sm text-red-500 list-disc list-inside">
          {state.errors.password.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}

      <button type="submit" className={inputClassName} disabled={pending}>
        {pending ? 'Submitting...' : 'Sign up'}
      </button>
    </form>
  );
}
