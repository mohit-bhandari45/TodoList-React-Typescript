"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers/controllers");
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use((0, cors_1.default)());
router.get("/fetchtodos", controllers_1.fetchTodos);
router.post("/savetodos", controllers_1.saveTodos);
router.delete("/deletetodos", controllers_1.deleteTodos);
exports.default = router;
