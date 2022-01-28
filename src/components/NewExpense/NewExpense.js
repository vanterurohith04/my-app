import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseData(enteredExpenseData){
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
