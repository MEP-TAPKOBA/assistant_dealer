/*
  Warnings:

  - You are about to drop the column `product_id` on the `products_in_shops` table. All the data in the column will be lost.
  - Added the required column `supplier_product_id` to the `products_in_shops` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products_in_shops" DROP CONSTRAINT "products_in_shops_product_id_fkey";

-- AlterTable
ALTER TABLE "products_in_shops" DROP COLUMN "product_id",
ADD COLUMN     "supplier_product_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "products_in_shops" ADD CONSTRAINT "products_in_shops_supplier_product_id_fkey" FOREIGN KEY ("supplier_product_id") REFERENCES "suppliers_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
