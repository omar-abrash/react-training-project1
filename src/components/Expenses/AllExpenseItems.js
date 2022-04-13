import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./expenses.css";
import React, { useState } from "react";

const AllExpenseItems = (props) => {
  // console.log(props); // look in here (the data come here as an object consist of array expenses)
  // console.log(props.expenses); // but in here we acess in the array expenses

  // for ExpenseFilter component we need the year and then make filter for data:
  // this mean we have change year ::> useState() hook for each change:
  const [selectedYear, setNewYear] = useState("2022"); // initial value

  const getNewYear = (newYear) => {
    setNewYear(newYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedYear} afterChangeYear={getNewYear} />

      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};
export default AllExpenseItems;
