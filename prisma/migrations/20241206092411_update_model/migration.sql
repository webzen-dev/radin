-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_projectId_fkey`;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
