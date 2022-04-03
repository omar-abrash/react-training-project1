import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import "./expenses.css";

function AllExpenseItems(props) {
  // console.log(props); // look in here (the data come here as an object consist of array expenses)
  // console.log(props.expenses); // but in here we acess in the array expenses
  return (
    <Card className="expenses">
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
}
export default AllExpenseItems;
