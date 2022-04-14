import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesResult.css";

const ExpenseResult = (props) => {
  let expensesNotFound = (
    <h2 className="expenses-list__fallback">No Expense Item in this year.</h2>
  );

  if (props.expensesArray.length > 0) {
    expensesNotFound =
      props.expensesArray.length > 0 &&
      props.expensesArray.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      });
  }
  return <ul className="expenses-list">{expensesNotFound}</ul>;
};
export default ExpenseResult;
