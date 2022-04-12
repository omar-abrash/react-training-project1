import AllExpenseItems from "./componants/Expenses/AllExpenseItems";
import React from "react";
import NewExpense from "./componants/NewExpense/NewExpense";

const App = () => {
  // if we want reCall the <ExpenseItem> with defferent Data we can use this array
  const expenses = [
    {
      id: "e1",
      title: "Home Insurance",
      date: new Date("2021-03-30"),
      amount: 500,
    },
    {
      id: "e2",
      title: "Car Insurance",
      date: new Date("2020-03-29"),
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
  const getCollectData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
    };
    console.log("In APP!!");
    console.log(newExpenseData);
  };
  // we must use attribute values to acces these data in this way :
  // look to ExpenseItem.js to see how acess the Extense array data to desired locations.
  return (
    <div>
      <NewExpense sendExpenseData={getCollectData} />
      <AllExpenseItems expenses={expenses}></AllExpenseItems>
    </div>
  );
};

export default App;
