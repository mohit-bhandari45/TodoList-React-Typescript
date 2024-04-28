import express from 'express';
import router from './route/route';
import connectDB from "./controllers/conn";

const app = express();
connectDB();

app.use("/", router);

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});