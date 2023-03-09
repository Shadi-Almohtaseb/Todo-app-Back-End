import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: Date.now(),
  },
});

const todo = mongoose.model("Todo", todoSchema);

export { todo };
