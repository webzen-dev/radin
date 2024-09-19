import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '@/utils/auth';

export default function dashboardMiddleware(req: NextApiRequest, res: NextApiResponse, next: () => void) {
  const token = req.cookies.token;
  const user = verifyToken(token);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
}

