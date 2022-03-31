import ExpenseItem from "./componants/ExpenseItem";

function App() {
  // if we want reCall the <ExpenseItem> with defferent Data we can use this array
  const Extense = [
    {
      id: "e1",
      title: "Home Insurance",
      date: new Date("2022-03-30"),
      amount: 500,
    },
    {
      id: "e2",
      title: "Car Insurance",
      date: new Date("2022-03-29"),
      amount: 100,
    },
    {
      id: "e3",
      title: "Resturent Insurance",
      date: new Date("2022-03-27"),
      amount: 1000,
    },
    {
      id: "e4",
      title: "Helth Insurance",
      date: new Date("2022-03-25"),
      amount: 2500,
    },
  ];
  // we must use attribute values to acces these data in this way :
  // look to ExpenseItem.js to see how acess the Extense array data to desired locations.
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={Extense[0].title}
        date={Extense[0].date}
        amount={Extense[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={Extense[1].title}
        date={Extense[1].date}
        amount={Extense[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={Extense[2].title}
        date={Extense[2].date}
        amount={Extense[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={Extense[3].title}
        date={Extense[3].date}
        amount={Extense[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
