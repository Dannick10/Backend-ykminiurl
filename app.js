import express from "express";
import linkRoutes from "./routes/LinkRoutes.js";
import cors from "cors"
import ConnectDB from "./db/mongooseConnect.js";
import dotenv from "dotenv"

const app = express();

ConnectDB()

dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api", linkRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
