import { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todoFunc';

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
router.put('/:id', (req, res) => {});

//Route POST todo/
//@desc add todo
//access public
router.delete('/:id', (req, res) => {});

export default router;
