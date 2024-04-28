import express, { Router } from "express";
import { fetchTodos, saveTodos, deleteTodos } from "../controllers/controllers";
import cors from "cors";

const router: Router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/fetchtodos", fetchTodos);
router.post("/savetodos", saveTodos);
router.delete("/deletetodos", deleteTodos);

export default router;
