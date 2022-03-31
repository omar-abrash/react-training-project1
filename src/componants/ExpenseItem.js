import "./ExpenseItem.css";

function ExpenseItem() {
  // how to inject the variavles in JSX code :
  const expenseDate = new Date("2022-03-31");
  const expenseDescription = "Home Insurance";
  const expenseAmount = 2500;
  // after define the variables we can use {varName} between curly braces
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
