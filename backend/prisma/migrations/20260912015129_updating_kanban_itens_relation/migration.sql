/*
  Warnings:

  - Added the required column `column_id` to the `kanban_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kanban_item" ADD COLUMN     "column_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "kanban_item" ADD CONSTRAINT "kanban_item_column_id_fkey" FOREIGN KEY ("column_id") REFERENCES "kanban_column"("id") ON DELETE CASCADE ON UPDATE CASCADE;
