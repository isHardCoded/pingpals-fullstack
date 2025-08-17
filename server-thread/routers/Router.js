import express from "express";

import UserRouter from "../routers/UserRouter.js";
import PostRouter from "../routers/PostRouter.js";

const router = express.Router();

router.use('/users', UserRouter);
router.use('/posts', PostRouter);

export default router;