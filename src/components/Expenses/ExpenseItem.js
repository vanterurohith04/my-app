import React from "react";

import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Box from "../UI/Box";
function ExpenseItem(props) {


  return (
   <Box className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </Box>
  );
}

export default ExpenseItem;
