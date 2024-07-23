import express from "express";
import cors from "cors";
import router from "./router/upload.js";
import connectDB from "./db/connectDB.js";

const app = express();
const PORT = 4000;

//middlewares
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//db connection
connectDB();

//routes
app.use("/", router);
 
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
