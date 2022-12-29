import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Sorting from "./components/Sorting/Sorting";
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
  const [sortedList, setSortedList] = useState(getFromLocalStorage("savedList", []));
  const [goal, setGoal] = useState(getFromLocalStorage("savedGoal", {}));
  const [earnedPoints, setEarnedPoints] = useState(
    getFromLocalStorage("earnedPoints", 0)
  );

  const [isAchieved, setIsAchieved] = useState(
    getFromLocalStorage("isAchieved", false)
  );

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [oldPoints, setOldPoints] = useState(0);

  const [isDoneFlag, setIsDoneFlag] = useState();
  const [isImportantFlag, setIsImportantFlag] = useState();


  useEffect(() => {
    console.group();
    console.log("list", list);
    console.log("goal", goal);
    console.log("earnedPoints", earnedPoints);
    console.log("isAchieved", isAchieved);
    console.groupEnd();

    setIsDoneFlag("isDone-all");
    setIsImportantFlag("isImportant-all");

    setSortedList(list);
    
    if (goal.name === undefined) {
      setIsOpenPopup(true);
    }
    
  }, []);

  useEffect(() => {
    setToLocalStorage("savedList", list);
    setToLocalStorage("earnedPoints", earnedPoints);
    setToLocalStorage("isAchieved", isAchieved);

    console.log("list", list, typeof list)
    console.log(list == undefined, list === undefined);
    
    setSortedList(list.filter((item) => sorting(item)));
  

  }, [list])

  useEffect(() => {
    setToLocalStorage("savedGoal", goal);

    setOldPoints(goal.price);
  }, [goal]);

  useEffect(() => {
    console.log("isDoneFlag", isDoneFlag);
    //console.log("isImportantFlag", isImportantFlag);

    setSortedList(list.filter((item) => sorting(item)));
  }, [isDoneFlag, isImportantFlag]);

  const sorting = (item) => {
  
    const option1 =
    isDoneFlag === String(item.isDone) || 
    isDoneFlag === "isDone-all";

    const option2 =
    isImportantFlag === String(item.isImportant) ||
    isImportantFlag === "isImportant-all";

    if (option1 && option2) return true;

    return false;
    
  }

  const setToLocalStorage = (key, set) => {
    localStorage.setItem(key, JSON.stringify(set));
  }


  const addTask = (task) => {
    setList([...list, task]);
  };

  const deleteTask = (id) => {
    //console.log(id)
    //setList(list.filter((item) => item.id !== id));

    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, toBeDeleted: !item.toBeDeleted };
        }
        return item;
      })
    );

    setTimeout(() => {
      removeFromList(id);
    }, 900)

  }

  const removeFromList = (id) => {
    setList(list.filter((item) => item.id !== id));
  }

  const deleteAllTasks = () => {
    setList(
      list.map((item) => {
        return { ...item, toBeDeleted: !item.toBeDeleted };
      })
    );

    setTimeout(() => {
      setList([]);
    }, 900)
  }

  const deleteAllDoneTasks = () => {
    setList(
      list.map((item) => {
        if (item.isDone === true) {
          return { ...item, toBeDeleted: !item.toBeDeleted };
        } else {
          return item;
        }
      })
    );

    setTimeout(() => {
      setList(list.filter((item) => item.isDone === false));
    }, 900);
  };

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
      <div className="app__body">
        <div className="app__wrapper">
          <Form addTask={addTask} />
          <Sorting
            isDoneFlag={isDoneFlag}
            setIsDoneFlag={setIsDoneFlag}
            isImportantFlag={isImportantFlag}
            setIsImportantFlag={setIsImportantFlag}
            deleteAllTasks={deleteAllTasks}
            deleteAllDoneTasks={deleteAllDoneTasks}
          />
        </div>

        <List
          sortedList={sortedList}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
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
