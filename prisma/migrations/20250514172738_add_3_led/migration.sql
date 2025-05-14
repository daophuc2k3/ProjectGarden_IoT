/*
  Warnings:

  - You are about to drop the column `light_status` on the `Garden` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Garden" DROP COLUMN "light_status",
ADD COLUMN     "led1_status" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "led2_status" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "led3_status" INTEGER NOT NULL DEFAULT 0;
