import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // use (useState("")) to declear the inital values of three inputs values
  const [inputTitle, newTitle] = useState("");
  const [inputDate, newDate] = useState("");
  const [inputAmount, newAmount] = useState("");

  // define the onChange functions for three input feild:
  const getNewTitle = (event) => {
    newTitle(event.target.value);
  };
  const getNewDate = (event) => {
    newDate(event.target.value);
  };
  const getNewAmount = (event) => {
    newAmount(event.target.value);
  };
  // submit function for (Form)
  const getInputsData = (event) => {
    event.preventDefault();
    // define new object to coolect Data:
    const newExpenseData = {
      title: inputTitle,
      date: new Date(inputDate),
      amount: inputAmount,
    };
    console.log(newExpenseData);
    // clear the data from inputs feilds:
    newTitle("");
    newDate("");
    newAmount("");
  };

  return (
    <form onSubmit={getInputsData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={inputTitle} onChange={getNewTitle} />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" value={inputDate} onChange={getNewDate} />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" value={inputAmount} onChange={getNewAmount} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
