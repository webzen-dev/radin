import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === "GET") {
    const { id } = query;

    // اگر id وجود نداشت، همه کاربران را برگردان
    if (!id) {
      try {
        const users = await prisma.user.findMany(); // پیدا کردن تمام کاربران
        return res.status(200).json(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }

    // اگر id وجود داشت، کاربر خاص را پیدا کن
    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    try {
      const userId = Number(id); // تبدیل id به عدد
      const user = await prisma.user.findUnique({
        where: {
          id: userId, // استفاده از id برای پیدا کردن کاربر خاص
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user); // برگرداندن کاربر خاص
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // متد POST برای ایجاد کاربر جدید
  if (method === "POST") {
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
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${method} Not Allowed`);
}
