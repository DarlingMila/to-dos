import React, { useState } from "react";
import "./Form.css";

function Form ({ addTask }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [isImportant, setIsImportant] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    
    const task = {
      id: Date.now(),
      name: name.trim(), 
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
    <section className="formSection">
      <form onSubmit={submitTask}>
        <div className="form_inputWrapper">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Задача..."
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="cost"
            id="cost"
            placeholder="Баллы за выполнение..."
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            autoComplete="off"
            required
          />
        </div>

        <div className="form_checkboxWrapper">
          <label htmlFor="importance">Отметить как важную</label>
          <input
            type="checkbox"
            name="importance"
            id="importance"
            checked={isImportant}
            onChange={(e) => {
              setIsImportant(!isImportant);
            }}
          />
        </div>

        <button className="form__submitBtn" type="submit"></button>
      </form>
    </section>
  );
}

export default Form ;
