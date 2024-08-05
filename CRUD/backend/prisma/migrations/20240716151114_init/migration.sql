-- CreateTable
CREATE TABLE "kid" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "kid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "kid_email_key" ON "kid"("email");
