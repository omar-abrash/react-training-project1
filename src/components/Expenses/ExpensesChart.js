import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  // initial value array
  const Bars = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Agu", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // to fill the values :
  // we have (props.expensesArray) ::> array which has data to replace the values of monthes
  // we need replace value depend on which month has amount value
  // this mean we want change the Bars array to another one hase different values.

  // Bars.map((Bar) =>
  //   props.expensesArray.map((expense) => {
  //     if (expense.date.getMonth().toString() === Bar.id) {
  //       Bar.value = Number(expense.amount);
  //     }
  //   })
  // );
  // Or:
  props.expensesArray.map((expense) => {
    let monthDate = expense.date.getMonth();
    Bars[monthDate].value = expense.amount;
  });

  return <Chart chartBars={Bars} />;
};
export default ExpensesChart;
