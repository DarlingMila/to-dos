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

    // setList([
    //   {id: 1, name: "why", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 2, name: "people", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 3, name: "stay", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 4, name: "home", price: Number(1500), isImportant: true, isDone: false},
    //   {id: 5, name: "when", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 6, name: "they", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 7, name: "wanna", price: Number(1500), isImportant: true, isDone: false},
    //   {id: 8, name: "party", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 9, name: "really", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 10, name: "hardy", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 11, name: "why", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 12, name: "people", price: Number(1500), isImportant: true, isDone: false},
    //   {id: 13, name: "stay", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 14, name: "home", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 15, name: "when", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 16, name: "they", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 17, name: "wanna", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 18, name: "party", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 19, name: "really", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 20, name: "hard", price: Number(1500), isImportant: true, isDone: false},
    //   {id: 21, name: "why", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 22, name: "people", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 23, name: "stay", price: Number(1500), isImportant: true, isDone: false},
    //   {id: 24, name: "home", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 25, name: "when", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 26, name: "they", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 27, name: "wanna", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 28, name: "party", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 29, name: "really", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 30, name: "hard", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 31, name: "why", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 32, name: "people", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 33, name: "stay", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 34, name: "home", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 35, name: "when", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 36, name: "they", price: Number(1500), isImportant: false, isDone: true},
    //   {id: 37, name: "wanna", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 38, name: "party", price: Number(1500), isImportant: false, isDone: false},
    //   {id: 39, name: "really", price: Number(1500), isImportant: true, isDone: true},
    //   {id: 40, name: "hard", price: Number(1500), isImportant: false, isDone: false},
    // ]);
    
  }, []);

  useEffect(() => {
    setToLocalStorage("savedList", list);
    setToLocalStorage("savedGoal", goal);
    setToLocalStorage("earnedPoints", earnedPoints);
    setToLocalStorage("isAchieved", isAchieved);
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
