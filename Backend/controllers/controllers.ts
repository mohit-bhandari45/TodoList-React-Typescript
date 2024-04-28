import { Request, Response } from "express";
import Todo from "../models/Todo";

const fetchTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        res.send(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching todos");
    }
};

const saveTodos = async (req: Request, res: Response) => {
    try {
        await Todo.create(req.body);
        res.json({ CreationSuccess: true });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving todos");
    }
};

const deleteTodos = async (req: Request, res: Response) => {
    try {
        await Todo.deleteMany({});
        res.json({ DeletionSuccess: true });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting todos");
    }
};

export { fetchTodos, saveTodos, deleteTodos };
