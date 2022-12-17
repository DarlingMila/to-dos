import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Goal from "./components/Goal/Goal";
import GoalPopup from "./components/GoalPopup/GoalPopup";

function App() {

  const getFromLocalStorage = (key, base) => {
    let isSaved = localStorage.getItem(key) !== null;
    let savedInformation = isSaved
      ? JSON.parse(localStorage.getItem(key))
      : base;
    return savedInformation;
  };

  const [list, setList] = useState(getFromLocalStorage("savedList", []));
  const [goal, setGoal] = useState(getFromLocalStorage("savedGoal", {}));
  const [points, setPoints] = useState(getFromLocalStorage("savedPoints", 0));

  const [isOpenPopup, setIsOpenPopup] = useState(false);


  useEffect(() => {
    console.log("list", list);
    console.log("goal", goal);
    console.log("points", points);
    
    if (goal.name === undefined) {
      console.log("задачи нет");
      setIsOpenPopup(true)
    } 
    
  }, []);

  useEffect(() => {
    setToLocalStorage("savedList", list);
    setToLocalStorage("savedGoal", goal);
    setToLocalStorage("savedPoints", points);
  }, [list, goal, points])

  const setToLocalStorage = (key, set) => {
    localStorage.setItem(key, JSON.stringify(set));
  }

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

    console.log("price", price, typeof price)

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


  const addGoal = (goal) => {
    console.log('goal', goal);
    setGoal(goal);
    setIsOpenPopup(false);
  }

  const closePopup = () => {
    setIsOpenPopup(false);
  }

  const openPopup = () => {
    setIsOpenPopup(true);
  };


  return (
    <div className="App">
      <Goal goal={goal} points={points} openPopup={openPopup} />
      <Form addTask={addTask} />
      <List list={list} deleteTask={deleteTask} doneTask={doneTask} />

      <GoalPopup
        addGoal={addGoal}
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
      />
    </div>
  );
}

export default App;
