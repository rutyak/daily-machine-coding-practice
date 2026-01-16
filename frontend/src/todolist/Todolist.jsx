import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo, updateTodo } from "../slice/todoSlice";

const Todolist = () => {
  const tasks = useSelector((state) => state.todo);

  console.log("tasks: ", tasks);

  const [editId, setEditId] = useState();

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handleEditClick(id, text) {
    setEditId(id);
    setInput(text);
  }

  function handleUpdateTask() {
    dispatch(updateTodo({ editId, input }));
    setEditId();
    setInput("");
  }

  function handleAddTask() {
    dispatch(addTodos(input));
  }

  return (
    <div style={{ width: "200px" }}>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
        style={{ widht: "100%" }}
      />
      <button onClick={editId ? handleUpdateTask : handleAddTask}>
        {editId ? "Update" : "Add"}
      </button>

      <div style={{ width: "100%"}}>
        {tasks.map((task) => (
          <div>
            {task.text}
            <button onClick={() => handleEditClick(task.id, task.text)}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteTodo(task.id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
