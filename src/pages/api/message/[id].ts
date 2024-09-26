import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Valid ID is required' });
  }

  switch (method) {
    case 'GET':
      // دریافت پیام بر اساس id
      try {
        const message = await prisma.message.findUnique({
          where: { id: Number(id) },
        });
        if (!message) {
          return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(message);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch message' });
      }
      break;

    case 'PUT':
      // به‌روزرسانی isRead به true
      try {
        const updatedMessage = await prisma.message.update({
          where: { id: Number(id) },
          data: {
            isRead: true, // تغییر وضعیت پیام به خوانده شده
          },
        });
        res.status(200).json(updatedMessage);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update message' });
      }
      break;

    case 'DELETE':
      try {
        await prisma.message.delete({
          where: { id: Number(id) },
        });
        res.status(204).end(); 
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete message' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
