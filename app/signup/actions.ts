'use server'

import { SignupFormSchema } from '@/app/_lib/definitions'
import bcrypt from 'bcrypt';
import { createSession } from '../_lib/session';


export async function signup(state, formData) {
    //here I  validate the fields
    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'), // passwords returns more than 1 error, so use map to list all
    })
    if(!validationResult.success){
        return{
            errors:validationResult.error.flatten().fieldErrors,
        }
    }

    const { name, email , password } = validationResult.data

    //Now I create the user

    const hashedPassword = await bcrypt.hash(password, 10)

    const data = await db
        .insert(users)
        .values({name, email, password : hashedPassword})
        .returning({id: users.id})
    
    const user = data[0]


    //create the session to user 
    // in this project we use stateless session, we store the user session in ther local browser.
    // Another way is to store in database, this provides the option such as giving the user the option to logout all devices
    await createSession(user.id)

}
