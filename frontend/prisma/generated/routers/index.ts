import { t } from "./helpers/createRouter";
import { guestsRouter } from "./Guest.router";
import { payment_statusesRouter } from "./Payment_status.router";
import { bookingsRouter } from "./Booking.router";
import { booking_roomsRouter } from "./booking_room.router";
import { booking_addonsRouter } from "./booking_addon.router";
import { roomsRouter } from "./Room.router";
import { roomclass_featuresRouter } from "./roomclass_feature.router";
import { addonsRouter } from "./Addon.router";
import { floorsRouter } from "./Floor.router";
import { room_classesRouter } from "./Room_class.router";
import { room_statusesRouter } from "./Room_status.router";
import { bed_typesRouter } from "./Bed_type.router";
import { room_class_bed_typesRouter } from "./room_class_bed_type.router";
import { featuresRouter } from "./Feature.router";

export const appRouter = t.router({
  guest: guestsRouter,
  payment_status: payment_statusesRouter,
  booking: bookingsRouter,
  booking_room: booking_roomsRouter,
  booking_addon: booking_addonsRouter,
  room: roomsRouter,
  roomclass_feature: roomclass_featuresRouter,
  addon: addonsRouter,
  floor: floorsRouter,
  room_class: room_classesRouter,
  room_status: room_statusesRouter,
  bed_type: bed_typesRouter,
  room_class_bed_type: room_class_bed_typesRouter,
  feature: featuresRouter
})

