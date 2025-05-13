/*
  Warnings:

  - You are about to drop the column `quantity` on the `Vegetable` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Vegetable" DROP COLUMN "quantity";
