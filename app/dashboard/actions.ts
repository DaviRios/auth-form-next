'user server'

import { verifySession } from "../_lib/session"

export async function banUser() { //the great hammer of ban user
    //verify user first(or u want to ban all? XD)

    const session = await verifySession()
    const role = session?.role

    if(role !=='admin'){
        return{ error: 'Unathorized'}
    }

    //lets actually ban
}