import express from "express";
import linkRoutes from "./routes/LinkRoutes.js";
import cors from "cors"
import ConnectDB from "./db/mongooseConnect.js";
import dotenv from "dotenv"
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: 'json' };

const app = express();

ConnectDB()

dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/api", linkRoutes)

app.get("/", (req,res) => {
  res.send("welcome")
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running`);
});
