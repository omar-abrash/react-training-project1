import AllExpenseItems from "./components/Expenses/AllExpenseItems";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Home Insurance",
    date: new Date("2021-03-30"),
    amount: 500,
  },
  {
    id: "e2",
    title: "Car Insurance",
    date: new Date("2021-03-29"),
    amount: 100,
  },
  {
    id: "e3",
    title: "Resturent Insurance",
    date: new Date("2022-03-27"),
    amount: 1000,
  },
  {
    id: "e4",
    title: "Helth Insurance",
    date: new Date("2019-03-25"),
    amount: 2500,
  },
];

const App = () => {
  // if we want reCall the <ExpenseItem> with defferent Data we can use this array
  const [expenses, setNewExpense] = useState(dummy_expenses);
  const getCollectData = (expenseData) => {
    // console.log(expenseData);
    setNewExpense((prevData) => {
      return [expenseData, ...prevData];
    });
  };

  return (
    <div>
      <NewExpense sendExpenseData={getCollectData} />
      <AllExpenseItems expenses={expenses}></AllExpenseItems>
    </div>
  );
};

export default App;
