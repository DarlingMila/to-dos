import "./List.css";
import React from "react";
import Item from "./../Item/Item";


function List({ sortedList, deleteTask, doneTask }) {

  const listContent = () => {
    if (sortedList.length === 0) {
      return (
        <>
          <span className="list__placeholder">список задач пуст</span>
        </>
      );
    } else {
      return (
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
      );

    }
  }

  return (
    <section className="list">
      {listContent()}
    </section>
  );
}

export default List;
