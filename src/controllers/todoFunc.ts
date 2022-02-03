import { RequestHandler } from 'express';
import { Todo } from '../models/todoModel';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;

  try {
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(200).json({ msg: 'Todo added', data: TODOS });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
