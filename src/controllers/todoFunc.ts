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

// Get Todos Function
export const getTodos: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ todos: TODOS });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const index = TODOS.findIndex((todo) => todo.id === todoId);

  try {
    if (index < 0) {
      res.status(400).json({ msg: 'Not found' });
    }

    TODOS[index].text = updatedText;

    res.status(200).json({ msg: 'Todo updated', todos: TODOS });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Delete Todo Function
export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
  const todoId = req.params.id;

  const index = TODOS.findIndex((todo) => todo.id === todoId);

  try {
    if (index < 0) {
      res.status(400).json({ msg: 'Not found' });
    }

    TODOS.splice(index, 1);
    res.status(200).json({ msg: 'Todo deleted', todos: TODOS });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
