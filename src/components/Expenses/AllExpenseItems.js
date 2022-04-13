import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./expenses.css";
import React, { useState } from "react";

const AllExpenseItems = (props) => {
  const [selectedYear, setNewYear] = useState("2022"); // initial value
  const getNewYear = (newYear) => {
    setNewYear(newYear);
  };
  // in here we need make filter for the (props.expense) depends on the selectedYear
  const filterdExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  // console.log(filterdExpenses);

  let expensesNotFound = <p>No Expense Item in this year.</p>;
  if (filterdExpenses.length > 0) {
    expensesNotFound =
      filterdExpenses.length > 0 &&
      filterdExpenses.map((expense) => {
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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} afterChangeYear={getNewYear} />
        {expensesNotFound}
      </Card>
    </div>
  );
};
export default AllExpenseItems;
