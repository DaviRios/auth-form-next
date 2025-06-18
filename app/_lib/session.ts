import 'server-only' // ensure that the code is never imported into a client component
import { SignJWT, jwtVerify } from 'jose' //Jose will help manage encrypting and decrypting JWT tokens
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { db } from '@/config/db'; // ajuste o caminho se necessário
import { users } from '@/config/schema';
import { eq } from 'drizzle-orm';



const key = new TextEncoder().encode(process.env.SECRET) //secret key to sign and verify token

const cookie: {
  name: string,
  options: Partial<ResponseCookie>,
  duration: number
} = {
  name: 'session',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax', // agora funciona
    path: '/',
  },
  duration: 24 * 60 * 60 * 1000,
}


// Crie no topo do arquivo ou em um types.ts
type SessionPayload = {
  userId: string;
  expires: Date;
};

export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key);
}


export async function decrypt(session: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, key, { algorithms: ['HS256'] });
    return payload as SessionPayload;
  } catch (error) {
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + cookie.duration)
  const session = await encrypt({ userId, expires })

  const response = NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_BASE_URL))

  response.cookies.set({
    name: cookie.name,
    value: session,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires,
  })

  return response
}


export async function verifySession(): Promise<{ userId: string, role: string }> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(cookie.name)?.value;
  const session = await decrypt(sessionToken || '');

  if (!session?.userId) {
    redirect('/login');
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.userId),
  });

  if (!user) {
    redirect('/login');
  }
  return {
    userId: session.userId,
    role: user.role,
  };
}



export async function deleteSession() { // simply clear all and go back to the login page
    (await cookies()).delete(cookie.name)
    redirect('/login')
}
