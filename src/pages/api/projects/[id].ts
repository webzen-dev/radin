// pages/api/projects/[id].ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Get single project by ID
    try {
      const project = await prisma.project.findUnique({
        where: { id: Number(id) },
      });

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching project' });
    }
  } else if (req.method === 'DELETE') {
    // Delete project by ID
    try {
      const deletedProject = await prisma.project.delete({
        where: { id: Number(id) },
      });

      res.status(200).json(deletedProject);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting project' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
