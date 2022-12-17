import React from 'react'

function Goal({ goal, points, openPopup }) {

  const open = () => {
    openPopup();
  }

  return (
    <section>
      <h1>{goal.name}</h1>
      <button type="button" onClick={open}>Поменять цель</button>
      <div>
        {points} / {goal.price}
      </div>
    </section>
  );
}

export default Goal