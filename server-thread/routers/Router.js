import express from "express";

import UserRouter from "../routers/UserRouter.js";

const router = express.Router();

router.use('/users', UserRouter);

export default router;