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
  return (
    <div className="new-expense">
      <ExpenseForm afterCollectData={getCollectData} />
    </div>
  );
};
export default NewExpense;
