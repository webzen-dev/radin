import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.redirect(new URL('/404', req.url)); // اینجا را بررسی کنید
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next(); // اگر توکن معتبر باشد
  } catch (err) {
    return NextResponse.redirect(new URL('/404', req.url)); // اینجا را هم بررسی کنید
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // اینجا باید به درستی تنظیم شده باشد
};
