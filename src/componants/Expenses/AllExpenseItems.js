import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./expenses.css";
import react, { useState } from "react";

const AllExpenseItems = (props) => {
  // console.log(props); // look in here (the data come here as an object consist of array expenses)
  // console.log(props.expenses); // but in here we acess in the array expenses

  // for ExpenseFilter component we need the year and then make filter for data:
  // this mean we have change year ::> useState() hook for each change:

  const [selectedYear, setSelectedYear] = useState("2022"); // initial gess 2022
  const getNewSelectedYear = (newYear) => {
    setSelectedYear(newYear);
    // console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeYear={getNewSelectedYear}
      />
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </Card>
  );
};
export default AllExpenseItems;
