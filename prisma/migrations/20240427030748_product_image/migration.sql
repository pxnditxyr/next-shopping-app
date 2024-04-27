-- CreateTable
CREATE TABLE "ProductIMage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductIMage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductIMage" ADD CONSTRAINT "ProductIMage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
