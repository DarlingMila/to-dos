import "./Sorting.css";
import React from "react";

function Sorting({
  isDoneFlag,
  setIsDoneFlag,
  isImportantFlag,
  setIsImportantFlag,
  deleteAllTasks,
  deleteAllDoneTasks,
}) {

  
  return (
    <section className="sortingSection">
      <fieldset className="sortingSection__fieldset sortingSection__fieldset_sortingBtns">
        <div>
          <input
            type="radio"
            name="isDone"
            id="isDone-true"
            value="true"
            onChange={(e) => setIsDoneFlag(e.target.value)}
            checked={isDoneFlag === "true"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isDone-true"
            title="Завершенные"
          >
            &#10003;
          </label>
          <input
            type="radio"
            name="isDone"
            id="isDone-false"
            value="false"
            onChange={(e) => setIsDoneFlag(e.target.value)}
            checked={isDoneFlag === "false"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isDone-false"
            title="Незавершенные"
          >
            &#9747;
          </label>
          <input
            type="radio"
            name="isDone"
            id="isDone-all"
            value="isDone-all"
            onChange={(e) => setIsDoneFlag(e.target.value)}
            checked={isDoneFlag === "isDone-all"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isDone-all"
            title="Все"
          >
            Все
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="isImportant"
            id="isImportant-true"
            value="true"
            onChange={(e) => setIsImportantFlag(e.target.value)}
            checked={isImportantFlag === "true"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isImportant-true"
            title="Важные"
          >
            &#9733;
          </label>
          <input
            type="radio"
            name="isImportant"
            id="isImportant-false"
            value="false"
            onChange={(e) => setIsImportantFlag(e.target.value)}
            checked={isImportantFlag === "false"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isImportant-false"
            title="Обычные"
          >
            &#9734;
          </label>
          <input
            type="radio"
            name="isImportant"
            id="isImportant-all"
            value="isImportant-all"
            onChange={(e) => setIsImportantFlag(e.target.value)}
            checked={isImportantFlag === "isImportant-all"}
          />
          <label
            className="sortingSection__label"
            htmlFor="isImportant-all"
            title="Все"
          >
            Все
          </label>
        </div>
      </fieldset>

      <fieldset className="sortingSection__fieldset">
        <button
          type="button"
          className="sortingSection__btn"
          onClick={deleteAllTasks}
        >
          Удалить все
        </button>
        <button
          type="button"
          className="sortingSection__btn"
          onClick={deleteAllDoneTasks}
        >
          Удалить сделанные
        </button>
      </fieldset>
    </section>
  );
}

export default Sorting;
