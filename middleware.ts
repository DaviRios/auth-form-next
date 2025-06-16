import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./app/_lib/session";
import path from "path";

export default async function middleware(req: NextRequest) {
    //create the path, the routes and the boolean to verify protection
    const protectedRoutes = ['/dashboard']
    const currentPath = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)

    if (isProtectedRoute) { //check valid session
        const cookie = cookies().get('session')?.value
        const session = await decrypt(cookie)

        //redirect user unvalid
        if (!session?.userId) {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }
        //render route
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image).*)'],
}