"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    try {
        mongoose_1.default.connect(`${process.env.MONGO_URI}`).then((e) => {
            console.log("Connection Successfull");
        }).catch((e) => {
            console.log("Failed");
        });
    }
    catch (e) {
        console.log(e);
    }
};
exports.default = connectDB;
