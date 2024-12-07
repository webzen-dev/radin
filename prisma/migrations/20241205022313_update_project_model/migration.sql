/*
  Warnings:

  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand` on table `project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `brand` VARCHAR(191) NOT NULL,
    MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `category` VARCHAR(191) NOT NULL;
