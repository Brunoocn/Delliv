/*
  Warnings:

  - The values [PEDING] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('PENDING', 'DELIVERED', 'CANCELED', 'PROCESSING', 'RETURNED');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" VARCHAR(150) NOT NULL;
