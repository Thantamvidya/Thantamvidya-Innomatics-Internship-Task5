/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./TodoList.css";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";

const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function addTask() {
    if (newTask.trim() === "") {
      alert("First add the task");
    } else {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    setEditIndex(index);
    setEditText(tasks[index].text);
  }

  function confirmEdit(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], text: editText };
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  }

  function toggleCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTasks(updatedTasks);
  }

  function clearAll() {
    setTasks([]);
  }

  return (
    <>
      <header>
        <h1 className="tagline">Interactive Todo List </h1>
      </header>
      <section className="todo-section">
        <div className="todo-container">
          <div className="todo-header">
            <h1>Add Task here</h1>
            <input
              value={newTask}
              onChange={handleInputChange}
              className="text-container"
              type="text"
              placeholder="Add your task"
            />
            <div className="input-btn">
              <button onClick={addTask} className="add-btn">
                Add <IoMdAdd className="add-icon" />
              </button>
              <button className="del-btn" onClick={clearAll}>
                Delete All <MdDelete className="del-icon" />
              </button>
            </div>
          </div>

          <div className="task-container">
            <ol>
              {tasks.map((item, index) => (
                <li
                  key={index}
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <div className="task-btn">
                        <button onClick={() => confirmEdit(index)}>
                          {" "}
                          <GiConfirmed />
                        </button>
                        <button onClick={() => setEditIndex(null)}>
                          {" "}
                          <CgCloseR />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleCompletion(index)}
                      />
                      {item.text}
                      {!item.completed && (
                        <div className="task-btn">
                          <button onClick={() => deleteTask(index)}>
                            <MdDelete />
                          </button>
                          <button onClick={() => editTask(index)}>
                            <FaEdit />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
