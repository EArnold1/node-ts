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
router.get('/', (req, res) => { });
//Route POST todo/
//@desc add todo
//access public
router.put('/:id', (req, res) => { });
//Route POST todo/
//@desc add todo
//access public
router.delete('/:id', (req, res) => { });
exports.default = router;
