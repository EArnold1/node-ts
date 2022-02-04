"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
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
// Get Todos Function
const getTodos = (req, res, next) => {
    try {
        res.status(200).json({ todos: TODOS });
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const index = TODOS.findIndex((todo) => todo.id === todoId);
    try {
        if (index < 0) {
            res.status(400).json({ msg: 'Not found' });
        }
        TODOS[index].text = updatedText;
        res.status(200).json({ msg: 'Todo updated', todos: TODOS });
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.updateTodo = updateTodo;
// Delete Todo Function
const deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const index = TODOS.findIndex((todo) => todo.id === todoId);
    try {
        if (index < 0) {
            res.status(400).json({ msg: 'Not found' });
        }
        TODOS.splice(index, 1);
        res.status(200).json({ msg: 'Todo deleted', todos: TODOS });
    }
    catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
exports.deleteTodo = deleteTodo;
