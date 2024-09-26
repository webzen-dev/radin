import { GetServerSidePropsContext } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const verifyToken = (context: GetServerSidePropsContext) => {
  const token = context.req.cookies.token;

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded; 
    } catch (error) {
      console.error('Token verification failed:', error);
      return null
    }
  }
  return null;
};

