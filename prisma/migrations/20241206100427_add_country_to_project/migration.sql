/*
  Warnings:

  - Added the required column `country` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `country` VARCHAR(191) NOT NULL;
