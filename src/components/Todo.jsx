import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Form from "./Form";
import ToDoListFotItem from "./ToDoListFotItem";

export default function Todo() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoListFotItem toDoList={toDoList} />
    </div>
  );
}
