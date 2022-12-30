import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

export default function Chart(props){
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return (
                    <ChartBar 
                        key={dataPoint.id}
                        value={dataPoint.value}
                        label={dataPoint.label}
                    />
                )
            })}
        </div>
    )
}