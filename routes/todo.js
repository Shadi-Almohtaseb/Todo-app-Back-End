import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
} from "../controllers/todo.js";

const router = express.Router();
//http://localhost:5000

router.get("/", getTodos);
router.post("/new", createTodo);
router.delete("/delete/:id", deleteTodo);
router.put("/complete/:id", completeTodo);

export default router;
