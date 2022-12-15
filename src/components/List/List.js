import React from "react";
import Item from "./../Item/Item";

function List({ list, deleteTask, doneTask }) {
  return (
    <section>
      <ul>
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
