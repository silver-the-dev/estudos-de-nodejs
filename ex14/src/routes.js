import express from "express";
import UsersController from "./app/controllers/UsersController.js";
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get("/", (req, res) => {
    const user = new UsersController().index();
    res.send(user);
});

export default router;
