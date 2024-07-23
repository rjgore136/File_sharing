import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://rjgore136:1234@filesharing.iwpqrjy.mongodb.net/File_sharing";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connection succssfull!");
  } catch (e) {
    console.log(e.message);
  }
};

export default connectDB;
