-- CreateTable
CREATE TABLE "Payment_status" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payment_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "checkin_date" TIMESTAMP(3) NOT NULL,
    "checkout_date" TIMESTAMP(3) NOT NULL,
    "num_adults" INTEGER NOT NULL,
    "num_children" INTEGER NOT NULL,
    "booking_amount" DOUBLE PRECISION NOT NULL,
    "guestId" TEXT NOT NULL,
    "payment_statusId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking_room" (
    "roomId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "booking_room_pkey" PRIMARY KEY ("roomId","bookingId")
);

-- CreateTable
CREATE TABLE "booking_addon" (
    "addonId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "booking_addon_pkey" PRIMARY KEY ("addonId","bookingId")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "room_number" INTEGER NOT NULL,
    "floorId" TEXT NOT NULL,
    "room_classId" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roomclass_feature" (
    "featureId" TEXT NOT NULL,
    "room_classId" TEXT NOT NULL,

    CONSTRAINT "roomclass_feature_pkey" PRIMARY KEY ("featureId","room_classId")
);

-- CreateTable
CREATE TABLE "Addon" (
    "id" TEXT NOT NULL,
    "addon_name" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Addon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Floor" (
    "id" TEXT NOT NULL,
    "floor_number" INTEGER NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room_class" (
    "id" TEXT NOT NULL,
    "class_name" TEXT NOT NULL,
    "base_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Room_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room_status" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Room_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bed_type" (
    "id" TEXT NOT NULL,
    "bed_type" TEXT NOT NULL,

    CONSTRAINT "Bed_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room_class_bed_type" (
    "room_classId" TEXT NOT NULL,
    "bed_typeId" TEXT NOT NULL,
    "num_of_beds" INTEGER NOT NULL,

    CONSTRAINT "room_class_bed_type_pkey" PRIMARY KEY ("room_classId","bed_typeId")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "feature_name" TEXT NOT NULL,

    CONSTRAINT "Feature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_payment_statusId_fkey" FOREIGN KEY ("payment_statusId") REFERENCES "Payment_status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_room" ADD CONSTRAINT "booking_room_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_room" ADD CONSTRAINT "booking_room_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_addon" ADD CONSTRAINT "booking_addon_addonId_fkey" FOREIGN KEY ("addonId") REFERENCES "Addon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_addon" ADD CONSTRAINT "booking_addon_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "Floor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_room_classId_fkey" FOREIGN KEY ("room_classId") REFERENCES "Room_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Room_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomclass_feature" ADD CONSTRAINT "roomclass_feature_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomclass_feature" ADD CONSTRAINT "roomclass_feature_room_classId_fkey" FOREIGN KEY ("room_classId") REFERENCES "Room_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_class_bed_type" ADD CONSTRAINT "room_class_bed_type_room_classId_fkey" FOREIGN KEY ("room_classId") REFERENCES "Room_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_class_bed_type" ADD CONSTRAINT "room_class_bed_type_bed_typeId_fkey" FOREIGN KEY ("bed_typeId") REFERENCES "Bed_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
