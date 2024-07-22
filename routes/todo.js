import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  completeTodo,
  getAllTodos,
} from "../controllers/todo.js";

const router = express.Router();
//http://localhost:5000

router.get("/", getTodos);
router.get("/all", getAllTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", completeTodo);

export default router;
