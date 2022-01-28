import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(Props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");
  /*const [userInput, setUserInput] =useState({
  enteredTitle:'',
  enteredAmount:'',
  enteredDate:''
});*/
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle:event.target.value,
    })*/
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    /*setUserInput({
    ...userInput,
    enteredAmount:event.target.value,
  })*/
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate:event.target.value,
    })*/
  }
  function onCancelHandler(){
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enterdDate),
    };
   Props.onSaveData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control ">
          <label>Amt</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control  ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterdDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
