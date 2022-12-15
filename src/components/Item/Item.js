import React from 'react'
import "./Item.css";

function Item ({ id, name, price, isImportant, isDone, deleteTask, doneTask }) {
  

  const deleteTaskHandler = (id) => {
    console.log("item id", id);
    deleteTask(id);
  };

  //const itemClassName = () => {
  //   let cl = "item";

  //   if (isImportant) {
  //     cl += ` item_important`
  //   }

  //   console.log(name, cl)
  //   return cl;
  // }

  const isDoneHandler = (id, price, isDone) => {
    isDone = !isDone;
    doneTask(id, price);
  }

  return (
    <li className={`item` + (isImportant ? ` item_important` : "") + (isDone ?` item_done` : "")}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button type="button" onClick={() => deleteTaskHandler(id)}>
        Удалить
      </button>
      <button type="button" onClick={() => isDoneHandler(id, price, isDone)}>
        Сделано
      </button>
    </li>
  );
}

export default Item