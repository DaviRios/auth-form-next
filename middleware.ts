import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const protectedRoutes = ['/dashboard'];
  const currentPath = req.nextUrl.pathname;

  if (protectedRoutes.includes(currentPath)) {
    const cookie = req.cookies.get('session')?.value;

    if (!cookie) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // opcional: decodifique JWT aqui (usando libs compatíveis com edge runtime)
    // mas evite usar libs que dependam de 'crypto' do Node

    // se precisar consultar usuário ou validar token, faça isso em APIs/Server Actions, não no middleware
  }

  return NextResponse.next();
}
