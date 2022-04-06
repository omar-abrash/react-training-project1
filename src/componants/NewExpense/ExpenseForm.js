import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date"></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number"></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
