import express from "express";
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get("/status", (req, res) => {
    res.status(200).send({ message: "working" });
});

export default router;
