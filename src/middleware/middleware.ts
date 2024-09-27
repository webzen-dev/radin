import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.redirect(new URL('/404', req.url)); 
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next(); 
  } catch (err) {
    return NextResponse.redirect(new URL('/404', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], 
};
