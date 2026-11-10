import React, { useState } from "react";

export default function Todo() {
  const [toDo, setToDo] = useState("");

  function handleChange(e) {
    setToDo(e.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} type="text" value={toDo} />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}
