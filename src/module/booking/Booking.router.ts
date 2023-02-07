import express from 'express'

import {BookingRepository} from './Booking.repository';

const router = express.Router();

router.get("/handle", async (_req, res) => {
    const repository = new BookingRepository();
    const response = await repository.getHandle();
    return res.send(response);

})


router.get("/", async (_req, res) => {
    const repository = new BookingRepository();
    const response = await repository.findAll();
    return res.send(response);
});

router.get("/:id", async (_req, res) => {
    const repository = new BookingRepository();
    const response = await repository.findById(_req.params.id);
    return res.send(response);
});


router.post("/", async (_req, res) => {
    const repository = new BookingRepository();
    const response = await repository.create(_req.body);
    return res.send(response);
})

router.post("/update", async (_req, res) => {
    const repository = new BookingRepository();
    const response = await repository.update(_req.body);
    return res.send(response);
})

export default router;