import express from "express";
import { downloadFile, handleFile } from "../controllers/fileController.js";
import upload from "../middlewares/fileUpload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), handleFile);
router.get("/file/:fileId", downloadFile);

export default router;
