import React from 'react'
import "./Item.css";

function Item ({ id, name, price, isImportant, isDone, deleteTask, doneTask }) {
  
  const deleteHandler = (id) => {
    console.log("item id", id);
    deleteTask(id);
  };

  const doneHandler = (id, price, isDone) => {
    doneTask(id, price, isDone);
  };

  return (
    <li
      className={`item
        ${isImportant ? "item_important" : ""} 
        ${isDone ? "item_done" : ""}
        `}
    >
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        type="button"
        className="itemBtn itemBtn_done"
        onClick={() => doneHandler(id, price, isDone)}
      >
      </button>
      <button
        type="button"
        className="itemBtn itemBtn_delete"
        onClick={() => deleteHandler(id)}
      >
      </button>
    </li>
  );
}

export default Item