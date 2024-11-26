// pages/api/projects/index.ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get all projects
    try {
      const projects = await prisma.project.findMany();
      res.status(200).json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: `Error fetching projects: ${error.message}` });
    }
  } else if (req.method === 'POST') {
    // Create new project
    const { name, description, brand, image, category } = req.body;

    if (!name || !description || !brand || !image || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const newProject = await prisma.project.create({
        data: {
          name,
          description,
          brand,
          image,
          category,
        },
      });
      res.status(201).json(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ error: `Error creating project: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}