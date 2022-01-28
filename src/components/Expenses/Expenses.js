//import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Box from "../UI/Box";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function filterYearHandler(filterYear) {
    setFilteredYear(filterYear);
    console.log(filterYear);
  }
  const filteredExpression = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Box className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={filterYearHandler}
        ></ExpensesFilter>
        <ExpensesChart expense={filteredExpression}/>
        <ExpensesList items={filteredExpression}></ExpensesList>
      </Box>
    </div>
  );
}

export default Expenses;
