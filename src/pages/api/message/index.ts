import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const messages = await prisma.message.findMany();
      res.status(200).json(messages);
      break;

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
      res.status(201).json(newMessage);
      break;

    case 'DELETE':
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'ID is required' });
      }

      await prisma.message.delete({
        where: { id: Number(id) },
      });
      res.status(204).end();
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
