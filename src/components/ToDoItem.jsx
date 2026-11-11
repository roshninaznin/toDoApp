import React from "react";
import styles from "./ToDoItem.module.css";

export default function ToDoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemDesign}>{item}</div>
      <hr className={styles.line}></hr>
    </div>
  );
}
