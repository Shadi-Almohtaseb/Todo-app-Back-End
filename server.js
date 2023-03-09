import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRouter from "./routes/todo.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/todos", todoRouter);

const CONNECTION_URL = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@cluster0.dea7np6.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

await mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message || "Something went wrong"));
