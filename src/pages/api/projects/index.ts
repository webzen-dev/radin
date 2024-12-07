import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const uploadDir = path.join(process.cwd(), "/public/uploads");

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({ uploadDir, keepExtensions: true, maxFiles: 5 });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST":
        await handlePost(req, res);
        break;
      case "GET":
        await handleGet(req, res);
        break;
      case "PUT":
        await handlePut(req, res);
        break;
      case "DELETE":
        await handleDelete(req, res);
        break;
      default:
        res.status(405).json({ success: false, error: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  console.log("Start handling POST request");

  try {
    const { fields, files } = await parseForm(req);
    console.log("Parsed form data:", { fields, files });

    const name = fields.name?.toString();
    const description = fields.description?.toString();
    const brand = fields.brand?.toString();
    const category = fields.category?.toString();
    const country = fields.country?.toString(); // استخراج country

    console.log("Extracted fields:", { name, description, brand, category, country });

    if (!name || !description || !brand || !category || !country) {
      console.warn("Missing required fields");
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    // مرحله 3: پردازش فایل‌ها
    const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
    console.log("Uploaded files:", uploadedFiles);

    const filePaths = await Promise.all(
      uploadedFiles.map(async (file) => {
        const newPath = path.join(
          uploadDir,
          file.originalFilename || "uploaded_file"
        );
        await fs.rename(file.filepath, newPath);
        console.log("File moved to:", newPath);
        return `/uploads/${file.originalFilename}`;
      })
    );

    console.log("Processed file paths:", filePaths);

    // مرحله 4: ذخیره در دیتابیس
    const project = await prisma.project.create({
      data: {
        name,
        description,
        brand,
        category,
        country,
        images: {
          create: filePaths.map((src) => ({ src })),
        },
      },
    });

    console.log("Created project in database:", project);

    res.status(201).json({ success: true, project });
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
      include: { images: true },
    });

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    return res.status(200).json({ success: true, project });
  }

  const projects = await prisma.project.findMany({ include: { images: true } });
  res.status(200).json({ success: true, projects });
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, error: "Project ID is required" });
  }

  const { fields, files } = await parseForm(req);

  const name = fields.name?.toString();
  const description = fields.description?.toString();
  const brand = fields.brand?.toString();
  const category = fields.category?.toString();
  const country = fields.country?.toString(); // دریافت country برای بروزرسانی

  const updates: any = {};
  if (name) updates.name = name;
  if (description) updates.description = description;
  if (brand) updates.brand = brand;
  if (category) updates.category = category;
  if (country) updates.country = country; // اضافه کردن country به بروزرسانی

  const uploadedFiles = files.file
    ? Array.isArray(files.file)
      ? files.file
      : [files.file]
    : [];
  const filePaths = await Promise.all(
    uploadedFiles.map(async (file) => {
      const newPath = path.join(
        uploadDir,
        file.originalFilename || "uploaded_file"
      );
      await fs.rename(file.filepath, newPath);
      return `/uploads/${file.originalFilename}`;
    })
  );

  const project = await prisma.project.update({
    where: { id: Number(id) },
    data: {
      ...updates,
      images: {
        deleteMany: {},
        create: filePaths.map((src) => ({ src })),
      },
    },
  });

  res.status(200).json({ success: true, project });
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, error: "Project ID is required" });
  }

  await prisma.project.delete({
    where: { id: Number(id) },
  });

  res
    .status(200)
    .json({ success: true, message: "Project deleted successfully" });
}
