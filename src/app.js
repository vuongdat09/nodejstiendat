import mongoose from "mongoose";
import express from "express";
import router from "./routes/product";

const app = express();
app.use(express.json());
app.use('/api',router)

mongoose.connect("mongodb://localhost:27017/testNodeJs")

export const viteNodeApp = app