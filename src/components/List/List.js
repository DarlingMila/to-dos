import React from "react";
import Item from "./../Item/Item";

import "./List.css";

function List({ list, deleteTask, doneTask }) {
  return (
    <section className="section">
      <ul className="list">
        {list.map((task) => {
          return (
            <Item
              key={task.id}
              id={task.id}
              name={task.name}
              price={task.price}
              isImportant={task.isImportant}
              isDone={task.isDone}
              deleteTask={deleteTask}
              doneTask={doneTask}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default List;
