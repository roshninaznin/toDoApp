import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleChange(e) {
    setToDo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setToDoList([...toDoList, toDo]);
    setToDo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleChange(e)} type="text" value={toDo} />
        <button type="Submit">Add</button>
      </form>



      {toDoList.map((item) => (
        <ToDoItem item={item} />
      ))}{" "}

      
    </div>
  );
}
