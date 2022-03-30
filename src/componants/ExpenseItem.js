import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>30 March 2022</div>
      <div className="expense-item__description">
        <h2>Home Insurance</h2>
        <div className="expense-item__price">$3000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
