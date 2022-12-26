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
      <div className="wrapper">
        <h1>{goal.name}</h1>
        <button type="button" onClick={open}>
          Поменять цель
        </button>
      </div>
      <div className="goal_progressBar">
        <div className="line">{goal.price}</div>
        <div className="line line_green" style={madeProgress}>
         {earnedPoints}
        </div>
      </div>
      {/* <div
        className="goal_progressBar"
        data-earnedPoints={earnedPoints}
        data-goalPrice={goal.price}
      >
        {earnedPoints} / {goal.price}
      </div>
      <div
        className="goal_progressBar"
        data-earnedPoints={earnedPoints}
        data-goalPrice={goal.price}
      >
        {earnedPoints} / {goal.price}
      </div> */}
    </section>
  );
}

export default Goal