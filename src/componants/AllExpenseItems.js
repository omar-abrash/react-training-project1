import ExpenseItem from "./ExpenseItem";

function AllExpenseItems(props) {
  // console.log(props); // look in here (the data come here as an object consist of array expenses)
  // console.log(props.expenses); // but in here we acess in the array expenses
  return props.expenses.map((Expense) => (
    <ExpenseItem
      title={Expense.title}
      date={Expense.date}
      amount={Expense.amount}
    ></ExpenseItem>
  ));
}
export default AllExpenseItems;
