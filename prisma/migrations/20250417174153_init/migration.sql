-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT,
    "profileId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garden" (
    "id" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Garden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vegetable" (
    "id" INTEGER NOT NULL,
    "gardenid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "import" INTEGER NOT NULL,
    "export" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Vegetable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" INTEGER NOT NULL,
    "vegetableid" INTEGER NOT NULL,
    "gardenid" INTEGER NOT NULL,
    "time" TIMESTAMP(3),

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorData" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "gardenid" INTEGER NOT NULL,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Garden" ADD CONSTRAINT "Garden_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vegetable" ADD CONSTRAINT "Vegetable_gardenid_fkey" FOREIGN KEY ("gardenid") REFERENCES "Garden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_gardenid_fkey" FOREIGN KEY ("gardenid") REFERENCES "Garden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_vegetableid_fkey" FOREIGN KEY ("vegetableid") REFERENCES "Vegetable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_gardenid_fkey" FOREIGN KEY ("gardenid") REFERENCES "Garden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
