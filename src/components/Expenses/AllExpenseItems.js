import ExpenseResult from "./ExpenseResult";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} afterChangeYear={getNewYear} />
        <ExpensesChart expensesArray={filterdExpenses} />
        <ExpenseResult expensesArray={filterdExpenses} />
      </Card>
    </div>
  );
};
export default AllExpenseItems;
