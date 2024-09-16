import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id) {
      try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }

    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    try {
      const userId = Number(id);
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        // اگر کاربر پیدا نشد، پیام 404 خودتان را به صورت JSON برمی‌گردانید
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
