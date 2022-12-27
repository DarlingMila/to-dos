import React from "react";
import Item from "./../Item/Item";

import "./List.css";

function List({ sortedList, deleteTask, doneTask }) {
  return (
    <section className="list">
      <ul>
        {sortedList.map((task) => {
          return (
            <Item
              key={task.id}
              id={task.id}
              name={task.name}
              price={task.price}
              isImportant={task.isImportant}
              isDone={task.isDone}
              toBeDeleted={task.toBeDeleted}
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
