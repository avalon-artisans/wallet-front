import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import { sessionOptions } from '@/providers/auth/iron-session-config.provider';

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();
  const session = await getIronSession(request, response, sessionOptions);
  const { user } = session;
  const currentUrlPath = new URL(request.url).pathname;

  if (currentUrlPath === '/' && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (currentUrlPath !== '/' && !user) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
};

export const config = {
  matcher: [
    '/',
    '/api/internal/(.*)',
    '/dashboard'
  ],
};