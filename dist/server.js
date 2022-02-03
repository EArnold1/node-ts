"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = (0, express_1.default)();
//middleware
app.use((0, body_parser_1.json)());
app.use('/todos', todoRoutes_1.default);
app.get('/', (req, res) => {
    res.send('hi');
});
const PORT = 5000;
app.listen(PORT);
