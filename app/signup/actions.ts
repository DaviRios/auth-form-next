'use server'

import { SignupFormSchema } from '@/app/_lib/definitions'

export async function signup(state, formData) {
    //here I gonna validate the fields
    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })
    if(!validationResult.success){
        return{
            erros:validationResult.error.flatten().fieldErrors,
        }
    }

    //Now I create the user

}
