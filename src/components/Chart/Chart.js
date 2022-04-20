import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let valuesOfAllBars = props.chartBars.map((chartBar) => chartBar.value);
  // console.log(valuesOfAllBars);
  const valueOfMaxBar = Math.max(...valuesOfAllBars);
  // console.log(valueOfMaxBar);
  return (
    <div className="chart">
      {props.chartBars.map((chartBar) => (
        <ChartBar
          key={chartBar.label}
          value={chartBar.value}
          maxValue={valueOfMaxBar}
          label={chartBar.label}
        />
      ))}
    </div>
  );
};
export default Chart;
