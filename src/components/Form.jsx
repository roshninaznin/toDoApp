import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ toDoList, setToDoList }) {
  const [toDo, setToDo] = useState("");

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
      <form className={styles.toDoForm} onSubmit={handleSubmit}>
        <input
          className={styles.designInput}
          onChange={(e) => handleChange(e)}
          type="text"
          value={toDo}
          placeholder="Enter Todo Items......"
        />
        <button className={styles.addbtn} type="Submit">
          Add
        </button>
      </form>
    </div>
  );
}
