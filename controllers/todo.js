import { todo } from "../models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todos = await todo.create({ text: req.body.text });
    res.status(201).json(todos);
    todos.save();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const result = await todo.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const completeTodo = async (req, res) => {
  try {
    const MyTodo = await todo.findById(req.params.id);
    MyTodo.complete = !MyTodo.complete;
    MyTodo.save();
    res.status(200).json(MyTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
