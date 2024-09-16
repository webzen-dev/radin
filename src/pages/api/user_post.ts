import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "Missing fields" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    try {
            const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password,
          role,
        },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    // اگر متد درخواست POST نباشد، 405 برگردان
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
