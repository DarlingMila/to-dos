import React from 'react'
import "./Goal.css";

function Goal({ goal, earnedPoints, openPopup, isAchieved }) {
  const open = () => {
    openPopup();
  };

  return (
    <section className={`goal ${isAchieved ? "goal_achieved" : ""}`}>
      <h1>{goal.name}</h1>
      <button type="button" onClick={open}>
        Поменять цель
      </button>
      <div>
        {earnedPoints} / {goal.price}
      </div>
    </section>
  );
}

export default Goal