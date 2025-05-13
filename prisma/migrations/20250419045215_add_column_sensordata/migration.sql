/*
  Warnings:

  - You are about to drop the column `data` on the `SensorData` table. All the data in the column will be lost.
  - Added the required column `humidity` to the `SensorData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `SensorData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `SensorData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SensorData" DROP COLUMN "data",
ADD COLUMN     "humidity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temperature" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
