import { RequestHandler } from 'express';
import { Todo } from '../models/todoModel';

const TODOS: Todo[] = [];

// Create Todo Function
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  try {
    if (text !== '') {
      const newTodo = new Todo(Math.random().toString(), text);

      TODOS.push(newTodo);

      res.status(200).json({ msg: 'Todo added', data: TODOS });
    } else {
      res.status(400).json({ msg: 'Empty string' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

export const getTodos: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ todos: TODOS });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
