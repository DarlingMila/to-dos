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
  const [earnedPoints, setEarnedPoints] = useState(
    getFromLocalStorage("earnedPoints", 0)
  );

  const [isAchieved, setIsAchieved] = useState(
    getFromLocalStorage("isAchieved", false)
  );

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [oldPoints, setOldPoints] = useState(0);


  useEffect(() => {
    console.group();
    console.log("list", list);
    console.log("goal", goal);
    console.log("earnedPoints", earnedPoints);
    console.log("isAchieved", isAchieved);
    console.groupEnd();
    
    if (goal.name === undefined) {
      setIsOpenPopup(true);
    }
    
  }, []);

  useEffect(() => {
    setToLocalStorage("savedList", list);
    setToLocalStorage("savedGoal", goal);
    setToLocalStorage("earnedPoints", earnedPoints);
    setToLocalStorage("isAchieved", isAchieved);

    setOldPoints(goal.price);
  }, [list, goal])

  const setToLocalStorage = (key, set) => {
    localStorage.setItem(key, JSON.stringify(set));
  }


  const addTask = (task) => {
    //console.log("task", task);
    setList([...list, task]);
  };

  const deleteTask = (id) => {
    //console.log(id)
    setList(list.filter((item) => item.id !== id));
  }

  const doneTask = (id, price, isDone) => {
    //console.log(id, price, isDone);
    //console.log("price", price, typeof price)

    if (isDone) {
      setEarnedPoints(earnedPoints - price);
      //console.log("earnedPoints - price = ", earnedPoints - price);
    } else {
      setEarnedPoints(earnedPoints + price);
      //console.log("earnedPoints + price = ", earnedPoints + price);
    }

    setList(list.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone}
      }
      return item;
    }));
  }

  useEffect(() => {

    if (earnedPoints >= goal.price) {
      setIsAchieved(true);
    } else {
      setIsAchieved(false);
    }
    
  },[earnedPoints, goal])


  const addGoal = (goal) => {
    //console.log('goal', goal);

    setGoal(goal);
    setIsOpenPopup(false);

    if (goal.fromScratch === true) {
      setEarnedPoints(0);
    } else {
      console.log("earnedPoints", earnedPoints);
      console.log("oldPoints", oldPoints);
      console.log("earnedPoints-oldPoints = ", earnedPoints - oldPoints);

      setEarnedPoints(earnedPoints-oldPoints);
    }

  }

  const closePopup = () => {
    setIsOpenPopup(false);
  }

  const openPopup = () => {
    setIsOpenPopup(true);
  };


  return (
    <div className="app">
      <Goal
        goal={goal}
        earnedPoints={earnedPoints}
        openPopup={openPopup}
        isAchieved={isAchieved}
      />
      <div className="app_wrapper">
        <Form addTask={addTask} />
        <List list={list} deleteTask={deleteTask} doneTask={doneTask} />
      </div>

      <GoalPopup
        goal={goal}
        addGoal={addGoal}
        isOpenPopup={isOpenPopup}
        closePopup={closePopup}
      />
    </div>
  );
}

export default App;
