import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form/Form"
import List from "./components/List/List";

function App() {

  const [list, setList] = useState([]);
  const [points, setPoints] = useState(0);

  // useEffect(() => {
  //   getFromLocalStorage();
  // }, []);

  // const getFromLocalStorage = () => {
  //   const isSaved = localStorage.getItem("savedList") !== null;
  //   console.log("isSaved", isSaved, typeof isSaved);
  //   const savedList = isSaved
  //     ? JSON.parse(localStorage.getItem("savedList"))
  //     : [];
  //   console.log("savedList", savedList, typeof savedList);
  //   setList(savedList);
  //   console.log("list", list);
  // }
  
  // useEffect(() => {
  //   setToLocalStorage();
  // }, [list])

  // const setToLocalStorage = () => {
  //   console.log("лист обновлен");
  //   console.log("ЗАПИСЫВАЕМ", list);

  //   localStorage.setItem("savedList", JSON.stringify(list));
  // }

  const addTask = (task) => {
    console.log("task", task);
    setList([...list, task]);
  };

  const deleteTask = (id) => {
    console.log(id)
    setList(list.filter((item) => item.id !== id));
  }

  const doneTask = (id, price, isDone) => {
    console.log(id, price, isDone);

    if (isDone) {
      setPoints(points - price);
    } else {
      setPoints(points + price);
    }

    setList(list.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone}
      }
      return item;
    }));
  }


  return (
    <div className="App">
      <Form addTask={addTask} />
      <List list={list} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
}

export default App;
