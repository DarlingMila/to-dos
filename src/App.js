import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form/Form"
import List from "./components/List/List";

function App() {

  const [list, setList] = useState([
    {
      id: 1,
      name: "покушать суп",
      price: 150,
      isImportant: true,
      isDone: true,
    },
    {
      id: 2,
      name: "слепить пельмени",
      price: 50,
      isImportant: false,
      isDone: true,
    },
    {
      id: 3,
      name: "снести стену",
      price: 500,
      isImportant: false,
      isDone: false,
    },
    {
      id: 4,
      name: "купить пряник",
      price: 20,
      isImportant: true,
      isDone: false,
    },
  ]);

  const [points, setPoints] = useState(0);


  const addTask = (task) => {
    console.log("task", task);
    setList([...list, task])

    // console.log("--- list", list);
  };

  useEffect(() => {
    console.log("--- list", list);
  }, [list])

  useEffect(() => {
    console.log("--- points", points);
  }, [points]);

  const deleteTask = (id) => {
    console.log(id)
    setList(list.filter((item) => item.id !== id));
  }

  const doneTask = (id, price) => {
    console.log(id, price)
    setPoints(points + price)
  }


  return (
    <div className="App">
      <Form addTask={addTask} />
      <List list={list} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
}

export default App;
