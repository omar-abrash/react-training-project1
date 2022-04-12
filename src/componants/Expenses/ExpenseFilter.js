import "./ExpenseFilter.css";

// this is a child component
const ExpenseFilter = (props) => {
  const getNewYearValue = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Select by Year</label>
      <select value={props.selected} onChange={getNewYearValue}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
