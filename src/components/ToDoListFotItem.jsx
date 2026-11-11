import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoListFotItem.module.css";

export default function ({ toDoList }) {
  return (
    <div className={styles.list}>
      {toDoList.map((item) => (
        <ToDoItem item={item} />
      ))}{" "}
    </div>
  );
}
