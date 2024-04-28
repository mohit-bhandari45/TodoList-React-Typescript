import express from 'express';
import router from './route/route';
import connectDB from "./controllers/conn";
import 'dotenv/config'

const app = express();
connectDB();

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});