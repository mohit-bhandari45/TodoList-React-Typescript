"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    try {
        mongoose_1.default.connect("mongodb+srv://mohitbhandari852:f6FAiynqSEsZ95Ra@todos.rjcstoi.mongodb.net/todos").then((e) => {
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
