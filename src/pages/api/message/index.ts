import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        const messages = await prisma.message.findMany();
        return res.status(200).json(messages);

      case 'POST':
        const { content, email, username } = req.body;

        if (!content || !email) {
          return res.status(400).json({ error: 'Content and email are required' });
        }

        const newMessage = await prisma.message.create({
          data: {
            content,
            email,
            username, // این فیلد اختیاری است
          },
        });
        return res.status(201).json(newMessage);

      case 'DELETE':
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ error: 'ID is required' });
        }

        await prisma.message.delete({
          where: { id: Number(id) },
        });
        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
