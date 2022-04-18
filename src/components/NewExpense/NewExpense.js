import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const getCollectData = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    // console.log("In NewExpense!!");
    // console.log(expenseData);
    props.sendExpenseData(expenseData);
  };
  const [clickEvent, setClickEvent] = useState(false);
  const clicked1 = () => {
    setClickEvent(true);
  };
  const clicked2 = () => {
    setClickEvent(false);
  };
  return (
    <div className="new-expense">
      {!clickEvent ? (
        <button onClick={clicked1}>Add New Expense</button>
      ) : (
        <ExpenseForm
          afterCollectData={getCollectData}
          changeClickEvent={clicked2}
        />
      )}
    </div>
  );
};
export default NewExpense;
