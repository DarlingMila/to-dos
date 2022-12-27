import React from 'react'
import "./Item.css";

function Item ({ id, name, price, isImportant, isDone, toBeDeleted, deleteTask, doneTask }) {
  
  const deleteHandler = (id) => {
    //console.log("item id", id);
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
        ${toBeDeleted ? "item_deleteAnimation" : ""}
        `}
    >
      <div className="item__wrapper">
        <h3 className="item__title">{name}</h3>
        <b className="item__price">{price}</b>
      </div>

      <button
        type="button"
        className="item__btn item__btn_done"
        onClick={() => doneHandler(id, price, isDone)}
      ></button>
      <button
        type="button"
        className="item__btn item__btn_delete"
        onClick={() => deleteHandler(id)}
      ></button>
    </li>
  );
}

export default Item