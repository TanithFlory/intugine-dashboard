/*
  Warnings:

  - The primary key for the `Trip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `currentStatusCode` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `destinationLatitude` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `destinationLongitude` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Trip` table. All the data in the column will be lost.
  - You are about to alter the column `phoneNumber` on the `Trip` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - A unique constraint covering the columns `[_id]` on the table `Trip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `_id` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currenStatusCode` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dest` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destLatitude` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destLongitude` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Made the column `transporter` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tripStartTime` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `currentStatus` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Made the column `phoneNumber` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `etaDays` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `distanceRemaining` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `source` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sourceLatitude` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sourceLongitude` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastPingTime` on table `Trip` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Booked', 'InTransit', 'ReachedDestination', 'Delivered');

-- CreateEnum
CREATE TYPE "StatusCode" AS ENUM ('RD', 'IT', 'D', 'B');

-- AlterTable
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_pkey",
DROP COLUMN "currentStatusCode",
DROP COLUMN "destination",
DROP COLUMN "destinationLatitude",
DROP COLUMN "destinationLongitude",
DROP COLUMN "id",
ADD COLUMN     "_id" TEXT NOT NULL,
ADD COLUMN     "currenStatusCode" "StatusCode" NOT NULL,
ADD COLUMN     "dest" TEXT NOT NULL,
ADD COLUMN     "destLatitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destLongitude" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "transporter" SET NOT NULL,
ALTER COLUMN "tripStartTime" SET NOT NULL,
DROP COLUMN "currentStatus",
ADD COLUMN     "currentStatus" "Status" NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET DATA TYPE INTEGER,
ALTER COLUMN "etaDays" SET NOT NULL,
ALTER COLUMN "distanceRemaining" SET NOT NULL,
ALTER COLUMN "source" SET NOT NULL,
ALTER COLUMN "sourceLatitude" SET NOT NULL,
ALTER COLUMN "sourceLongitude" SET NOT NULL,
ALTER COLUMN "lastPingTime" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Trip__id_key" ON "Trip"("_id");
