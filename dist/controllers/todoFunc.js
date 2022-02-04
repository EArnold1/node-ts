"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = require("../models/todoModel");
const TODOS = [];
// Create Todo Function
const createTodo = (req, res, next) => {
    const text = req.body.text;
    try {
        if (text !== '') {
            const newTodo = new todoModel_1.Todo(Math.random().toString(), text);
            TODOS.push(newTodo);
            res.status(200).json({ msg: 'Todo added', data: TODOS });
        }
        else {
            res.status(400).json({ msg: 'Empty string' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    try {
        res.status(200).json({ todos: TODOS });
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.getTodos = getTodos;
