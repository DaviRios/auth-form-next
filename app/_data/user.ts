import { verifySession } from "../_lib/session"
import { db } from '@/drizzle/db'
import { users } from '@/drizzle/schema'
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint"
import { cache } from 'react'

export const getUser = cache(async () => {
    //verify user session
    const session = await verifySession()
    //fetch data
    const data = await db.query.users.findMany({
        where: eq(user.id, session.userId),
    })
    const user = data[0]

    //now we filter using DTO

    const filteredUser = userDTO(user)
    return filteredUser //return the filter to protect user

})

function userDTO(user){ //minimizes the chance of our team exposes fields
    taintUniqueValue(
        'Do not pass a user session token to the client.',
        user,
        user.session.token,
    )
    return{
        name:users.name,
        email:users.email,
        session:users.session,
        auditTrail: canViewAudit(user.auditTrail, user.role), //if user is admin
    }
}

function canViewAudit(auditTrail, role) {
    return role === 'admin' ? auditTrail: null    
}
