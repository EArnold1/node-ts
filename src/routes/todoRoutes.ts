import { Router } from 'express';
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from '../controllers/todoFunc';

const router = Router();

//Route POST todo/
//@desc add todo
//access public
router.post('/', createTodo);

//Route POST todo/
//@desc add todo
//access public
router.get('/', getTodos);

//Route POST todo/
//@desc add todo
//access public
router.put('/:id', updateTodo);

//Route POST todo/
//@desc add todo
//access public
router.delete('/:id', deleteTodo);

export default router;
