import express from "express";

const router = express.Router();

import emailController from "../controllers/emailcontroller.js";

import { storage } from "../services/Emailservice.js";
import { upload } from "../services/Emailservice.js";

router.post('/send-email', upload.any('attachment'), emailController.sendEmailController);

export default router;
