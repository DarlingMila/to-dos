import React, { useState } from "react";
import "./GoalPopup.css";

function GoalPopup({ addGoal, isOpenPopup, closePopup }) {
  const [goalName, setGoalName] = useState("");
  const [goalPrice, setGoalPrice] = useState("");
  const [fromScratch, setFromScratch] = useState(true);

  const submitGoal = (e) => {
    e.preventDefault();

    const goal = {
      name: goalName,
      price: Number(goalPrice),
      fromScratch,
    };

    addGoal(goal);

    resetData();
  };

  const close = () => {
    resetData();
    closePopup();
  }

  const resetData = () => {
    setGoalName("");
    setGoalPrice(0);
    setFromScratch(true);
  }

  return (
    <section
      className={`goal-popup 
        ${isOpenPopup ? "goal-popup_active " : ""} 
        `}
    >
      <div className="popup">
        <div>
          <h3>Обозначьте цель</h3>
          <button type="button" onClick={close}>
            &times;
          </button>
        </div>

        <form onSubmit={submitGoal}>
          <input
            type="text"
            name="name"
            value={goalName}
            placeholder="Цель..."
            onChange={(e) => {
              setGoalName(e.target.value);
            }}
            required
          />
          <input
            type="number"
            name="price"
            value={goalPrice}
            placeholder="Стоимость..."
            onChange={(e) => {
              setGoalPrice(e.target.value);
            }}
            required
          />
          <input
            type="checkbox"
            name="startingPoint"
            value={fromScratch}
            checked={fromScratch}
            onChange={(e) => {
              setFromScratch(!fromScratch);
            }}
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default GoalPopup;
