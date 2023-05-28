import * as dotenv from 'dotenv' 
dotenv.config()
import express from "express";
import { productRouter } from "./routes/products.routes.js";
import { connectDB } from "./database/config.js";
import { categoryRouter } from "./routes/categories.routes.js";
import cors from 'cors'

const app = express();

app.use(cors())
connectDB()

app.use(express.json())

app.use('/api/v1/product', productRouter)
app.use('/api/v1/category', categoryRouter)

app.listen(process.env.PORT, () => {
    console.log('server running port 5000');
});
