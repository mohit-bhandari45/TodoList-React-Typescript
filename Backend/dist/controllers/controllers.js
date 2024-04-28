"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.saveTodos = exports.fetchTodos = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const fetchTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo_1.default.find();
        res.send(todos);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error fetching todos");
    }
});
exports.fetchTodos = fetchTodos;
const saveTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Todo_1.default.create(req.body);
        res.json({ CreationSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error saving todos");
    }
});
exports.saveTodos = saveTodos;
const deleteTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Todo_1.default.deleteMany({});
        res.json({ DeletionSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error deleting todos");
    }
});
exports.deleteTodos = deleteTodos;
