"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    try {
        const newTodo = new todoModel_1.Todo(Math.random().toString(), text);
        TODOS.push(newTodo);
        res.status(200).json({ msg: 'Todo added', data: TODOS });
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.createTodo = createTodo;
