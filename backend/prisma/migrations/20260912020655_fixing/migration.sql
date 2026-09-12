/*
  Warnings:

  - The `importance` column on the `kanban_item` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ItemImportance" AS ENUM ('backlog', 'low', 'normal', 'high', 'urgent');

-- AlterTable
ALTER TABLE "kanban_item" DROP COLUMN "importance",
ADD COLUMN     "importance" "ItemImportance" DEFAULT 'normal';

-- DropEnum
DROP TYPE "item_importance";
