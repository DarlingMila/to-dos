import React from 'react'
import "./Goal.css";

function Goal({ goal, earnedPoints, openPopup, isAchieved }) {
  const open = () => {
    openPopup();
  };

  const setWidth = () => {
    if (earnedPoints >= goal.price) {
      return "100%";
    }
    const width = (earnedPoints * 100) / goal.price;
    return `${width}%`;
  }

  const madeProgress = {
    width: setWidth(),
  };

  return (
    <section className={`goal ${isAchieved ? "goal_achieved" : ""}`}>
      <div className="goal__wrapper">
        <h1 className="goal__title">{goal.name}</h1>
        <button className="goal__btn" type="button" onClick={open}>
          Поменять цель
        </button>
      </div>
      <div className="goal_progressBar">
        <div className="line">{goal.price}</div>
        <div className="line line_progress" style={madeProgress}>
          {earnedPoints}
        </div>
      </div>
    </section>
  );
}

export default Goal