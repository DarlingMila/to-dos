import React, { useState } from "react";

function Form ({ addTask }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isImportant, setIsImportant] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    
    const task = {
      id: Date.now(),
      name, 
      price: Number(price), 
      isImportant,
      isDone: false,
    }
    addTask(task);

    e.target.reset();
    setName("");
    setPrice(0);
    setIsImportant(false);
  }

  return (
    <section>
      <form onSubmit={submitTask}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Задача..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="number"
          name="cost"
          id="cost"
          placeholder="Стоимость..."
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
        <input
          type="checkbox"
          name="importance"
          id="importance"
          checked={isImportant}
          onChange={(e) => {
            setIsImportant(!isImportant);
          }}
        />
        <button type="submit">Добавить</button>
      </form>
    </section>
  );
}

export default Form ;
