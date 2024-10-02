/*
  Warnings:

  - The values [InTransit,ReachedDestination] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('Booked', 'In_Transit', 'Reached_Destination', 'Delivered');
ALTER TABLE "Trip" ALTER COLUMN "currentStatus" TYPE "Status_new" USING ("currentStatus"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "phoneNumber" SET DATA TYPE BIGINT;
