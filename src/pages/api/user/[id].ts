import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const userId = Number(id);

    if (isNaN(userId)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
