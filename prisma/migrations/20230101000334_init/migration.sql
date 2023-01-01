-- CreateTable
CREATE TABLE "Brands" (
    "id" SERIAL NOT NULL,
    "name_brand" VARCHAR(256) NOT NULL,
    "prefix" VARCHAR(256) NOT NULL,
    "class" INTEGER NOT NULL,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" SERIAL NOT NULL,
    "name_vehicles" VARCHAR(256) NOT NULL,
    "id_brand" INTEGER NOT NULL,
    "description" VARCHAR(256),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name_product" VARCHAR(256) NOT NULL,
    "id_brand" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "is_main" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagesToProducts" (
    "id" SERIAL NOT NULL,
    "id_image" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImagesToProducts_pkey" PRIMARY KEY ("id_image","id_product")
);

-- CreateTable
CREATE TABLE "ImagesToVehicles" (
    "id" SERIAL NOT NULL,
    "id_image" INTEGER NOT NULL,
    "id_vehicle" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImagesToVehicles_pkey" PRIMARY KEY ("id_image","id_vehicle")
);

-- CreateTable
CREATE TABLE "ImagesToBrads" (
    "id" SERIAL NOT NULL,
    "id_image" INTEGER NOT NULL,
    "id_brand" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImagesToBrads_pkey" PRIMARY KEY ("id_image","id_brand")
);

-- CreateTable
CREATE TABLE "ProductsToVehicle" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER NOT NULL,
    "id_vehicle" INTEGER NOT NULL,
    "description" VARCHAR(256),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductsToVehicle_pkey" PRIMARY KEY ("id_product","id_vehicle")
);

-- AddForeignKey
ALTER TABLE "Vehicles" ADD CONSTRAINT "Vehicles_id_brand_fkey" FOREIGN KEY ("id_brand") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_id_brand_fkey" FOREIGN KEY ("id_brand") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToProducts" ADD CONSTRAINT "ImagesToProducts_id_image_fkey" FOREIGN KEY ("id_image") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToProducts" ADD CONSTRAINT "ImagesToProducts_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToVehicles" ADD CONSTRAINT "ImagesToVehicles_id_image_fkey" FOREIGN KEY ("id_image") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToVehicles" ADD CONSTRAINT "ImagesToVehicles_id_vehicle_fkey" FOREIGN KEY ("id_vehicle") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToBrads" ADD CONSTRAINT "ImagesToBrads_id_image_fkey" FOREIGN KEY ("id_image") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesToBrads" ADD CONSTRAINT "ImagesToBrads_id_brand_fkey" FOREIGN KEY ("id_brand") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsToVehicle" ADD CONSTRAINT "ProductsToVehicle_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsToVehicle" ADD CONSTRAINT "ProductsToVehicle_id_vehicle_fkey" FOREIGN KEY ("id_vehicle") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
