import express from "express";

import BookingRouter from './module/booking/Booking.router';
const router = express.Router();


router.use("/booking", BookingRouter)

export default router;