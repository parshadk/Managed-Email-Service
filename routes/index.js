import express from "express";

const router = express.Router();

import emailController from "../controllers/emailcontroller.js";

import { storage } from ".././Emailservice.js";
import { upload } from ".././Emailservice.js";

router.post('/send-email', upload.any('attachment'), emailController.sendEmailController);

export default router;
