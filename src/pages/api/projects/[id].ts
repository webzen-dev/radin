// pages/api/projects/[id].ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log('Received DELETE request for ID:', id);

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid or missing project ID' });
  }

  if (req.method === 'GET') {
    try {
      const project = await prisma.project.findUnique({
        where: { id: Number(id) },
      });

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      res.status(200).json(project);
    } catch (error) {
      console.error("Error fetching project:", error); // لاگ خطا
      res.status(500).json({ error: 'Error fetching project' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.image.deleteMany({
        where: { projectId: Number(id) },
      });

      const deletedProject = await prisma.project.delete({
        where: { id: Number(id) },
      });

      console.log("Deleted project:", deletedProject); 

      res.status(200).json(deletedProject);
    } catch (error) {
      console.error("Error deleting project:", error); // لاگ خطا
      res.status(500).json({ error: 'Error deleting project' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
