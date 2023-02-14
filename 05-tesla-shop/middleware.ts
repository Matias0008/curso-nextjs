import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const requestedPage = request.nextUrl.pathname;

  if (request.nextUrl.pathname.startsWith("/checkout/")) {
    //* Informacion util de la session de next auth
    const session = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
      raw: true,
    });

    if (!session) {
      return NextResponse.redirect(new URL(`/auth/login?p=${requestedPage}`, request.url));
    }

    if (request.nextUrl.pathname.includes("summary")) {
      const address = request.cookies.get("address");
      if (!address) {
        return NextResponse.redirect(new URL(`/checkout/address`, request.url));
      }
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: "/checkout/:path*",
};
