import "./Sorting.css";

import React from "react";

function Sorting({ isDoneFlag, setIsDoneFlag, isImportantFlag, setIsImportantFlag }) {
  return (
    <section className="sortingSection">
      <fieldset className="sortingSection__fieldset">
        <label htmlFor="isDone-true">Сделанные</label>
        <input
          type="radio"
          name="isDone"
          id="isDone-true"
          value="true"
          onChange={(e) => setIsDoneFlag(e.target.value)}
          checked={isDoneFlag === "true"}
        />
        <label htmlFor="isDone-false">Не сделанные</label>
        <input
          type="radio"
          name="isDone"
          id="isDone-false"
          value="false"
          onChange={(e) => setIsDoneFlag(e.target.value)}
          checked={isDoneFlag === "false"}
        />
        <label htmlFor="isDone-all">Все</label>
        <input
          type="radio"
          name="isDone"
          id="isDone-all"
          value="isDone-all"
          onChange={(e) => setIsDoneFlag(e.target.value)}
          checked={isDoneFlag === "isDone-all"}
        />
      </fieldset>

      <fieldset className="sortingSection__fieldset">
        <label htmlFor="isImportant-true">Важные</label>
        <input
          type="radio"
          name="isImportant"
          id="isImportant-true"
          value="true"
          onChange={(e) => setIsImportantFlag(e.target.value)}
          checked={isImportantFlag === "true"}
        />
        <label htmlFor="isImportant-false">Обычные</label>
        <input
          type="radio"
          name="isImportant"
          id="isImportant-false"
          value="false"
          onChange={(e) => setIsImportantFlag(e.target.value)}
          checked={isImportantFlag === "false"}
        />
        <label htmlFor="isImportant-all">Все</label>
        <input
          type="radio"
          name="isImportant"
          id="isImportant-all"
          value="isImportant-all"
          onChange={(e) => setIsImportantFlag(e.target.value)}
          checked={isImportantFlag === "isImportant-all"}
        />
      </fieldset>

      <fieldset className="sortingSection__fieldset">
        <button type="button" className="sortingSection__btn">
          Удалить все
        </button>
        <button type="button" className="sortingSection__btn">
          Удалить сделанные
        </button>
      </fieldset>
    </section>
  );
}

export default Sorting;
