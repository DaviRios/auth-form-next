import 'server-only' // ensure that the code is never imported into a client component
import { SignJWT, jwtVerify } from 'jose' //Jose will help manage encrypting and decrypting JWT tokens
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const key = new TextEncoder().encode(process.env.SECRET) //secret key to sign and verify token

const cookie = {
    name: 'session',
    options: { httpOnly:true, secure: true, sameSite: 'lax', path: '/'},
    duration: 24 * 60 * 60 * 1000,
}

export async function encrypt(payload) {     
    return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key)
}

export async function decrypt(session) {
    try{
        const { payload } = await jwtVerify(session, key, {algorithms:['HS256'],})
        return payload
    }catch (error) {
        return null
    }
}

export async function createSession(userId) {
    const expires = new Date(Date.now() + cookie.duration) //defines the session expiration time base on cookie
    const session = await encrypt({userId, expires}) //encrypt the session

    cookies().set(cookie.name, session, {...cookie.options, expires})
    redirect('/dashboard')
} 

export async function verifySession() { //reads and decrypts the cookie to get the user's session
    const sessionToken = cookies().get(cookie.name)?.value
    const session = await decrypt(sessionToken)

    
    if(!session?.userId){ // if it's not valid it redirects them back to the login page
        redirect('/login')
    }

    return {userId: session.userId}
} 

export async function deleteSession() { // simply clear all and go back to the login page
    cookies().delete(cookie.name)
    redirect('/login')
}
