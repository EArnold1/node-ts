"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoFunc_1 = require("../controllers/todoFunc");
const router = (0, express_1.Router)();
//Route POST todo/
//@desc add todo
//access public
router.post('/', todoFunc_1.createTodo);
//Route POST todo/
//@desc add todo
//access public
router.get('/', todoFunc_1.getTodos);
//Route POST todo/
//@desc add todo
//access public
router.put('/:id', todoFunc_1.updateTodo);
//Route POST todo/
//@desc add todo
//access public
router.delete('/:id', todoFunc_1.deleteTodo);
exports.default = router;
