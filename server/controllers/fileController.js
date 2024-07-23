import { response } from "express";
import uploadModel from "../models/uploadModel.js";

export const handleFile = async (req, res) => {
  const { path, originalname } = req.file;
  console.log(req.file);
  try {
    const file = await uploadModel.create({
      path: path,
      name: originalname,
    });
    // console.log(file);
    res.json({ success: true, path: `http://localhost:4000/file/${file._id}` });
  } catch (e) {
    res.json({
      success: false,
      message: `Failed to create download url:${e.message}`,
    });
  }
};

export const downloadFile = async (req, res) => {
  const { fileId } = req.params;
  try {
    const file = await uploadModel.findById(fileId);
    file.downloadContent++;
    await file.save();
    res.download(file.path, file.originalname);
  } catch (e) {
    return res.json({ sucess: false, message: e.message });
  }
};
