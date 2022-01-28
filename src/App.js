import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_Data = [
  {
    id: "e1",
    title: "Enter Values",
    amount: 0.0,
    date: new Date(),
  }
  
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Data);

  function addExpenseHandler(expense) {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
