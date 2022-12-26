import React, {useState} from 'react'
import "./Item.css";

function Item ({ id, name, price, isImportant, isDone, deleteTask, doneTask }) {

  const [deleteAnimation, setDeleteAnimation] = useState(false);
  
  const deleteHandler = (id) => {
    console.log("item id", id);
    
    setTimeout(() => {
      deleteTask(id);
    }, 1000)
    setDeleteAnimation(true);
  };

  const doneHandler = (id, price, isDone) => {
    doneTask(id, price, isDone);
  };

  return (
    <li
      className={`item
        ${isImportant ? "item_important" : ""} 
        ${isDone ? "item_done" : ""}
        ${deleteAnimation ? "item_deleteAnimation" : ""}
        `}
    >
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        type="button"
        className="itemBtn itemBtn_done"
        onClick={() => doneHandler(id, price, isDone)}
      ></button>
      <button
        type="button"
        className="itemBtn itemBtn_delete"
        onClick={() => deleteHandler(id)}
      ></button>
    </li>
  );
}

export default Item