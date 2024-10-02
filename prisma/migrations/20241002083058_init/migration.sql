-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "tripId" TEXT NOT NULL,
    "transporter" TEXT,
    "tripStartTime" TIMESTAMP(3),
    "currentStatusCode" TEXT,
    "currentStatus" TEXT,
    "phoneNumber" BIGINT,
    "etaDays" INTEGER,
    "distanceRemaining" INTEGER,
    "tripEndTime" TIMESTAMP(3),
    "source" TEXT,
    "sourceLatitude" DOUBLE PRECISION,
    "sourceLongitude" DOUBLE PRECISION,
    "destination" TEXT,
    "destinationLatitude" DOUBLE PRECISION,
    "destinationLongitude" DOUBLE PRECISION,
    "lastPingTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trip_tripId_key" ON "Trip"("tripId");
