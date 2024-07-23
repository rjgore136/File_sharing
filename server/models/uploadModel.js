import mongoose from "mongoose";

const uploadSchema = mongoose.Schema({
  path: { type: String, required: true },
  name: { type: String, required: true },
  downloadContent: { type: Number, required: true, default: 0 },
});

const uploadModel = mongoose.model("file", uploadSchema);

export default uploadModel;
