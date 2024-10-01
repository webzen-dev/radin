// pages/api/user/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'token=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict');
    return res.status(200).json({ message: 'Logout successful' });
  }

  return res.status(405).json({ message: `Method ${req.method} not allowed` });
}
