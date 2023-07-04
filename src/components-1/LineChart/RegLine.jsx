import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Line } from "react-chartjs-2";

// import "./LineChart.scss";
import { useState, useRef, useEffect } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
Chart.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Filler
);

export const options = {
    elements: {
        bar: {
          borderWidth: 2,
        },
      },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Registrations",
    },
  },
  
};

const data = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  //labels: utils.days({count:30}),
  datasets: [
    {
      label: "Registrations",
      data: [12,13,8,10,34,0,0,37,12,16,25,32,26,35,48,28,12, 33, 35, 41, 44, 25,10,15,18,22,19,27,0,20],
      fill: true,
      backgroundColor: "rgb(105,81,162,0.2)",
      borderColor: "rgb(105,81,162,1)"
    },
  ],
};


const RegLine = () => {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
     <div className="container mt-4" style={{width:"800px",heoght:"500px"}}>
    <Line data={data} options={options} />
     </div>
  );
};
export default RegLine;
