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
    animations: {
        radius: {
          duration: 10,
          easing: 'linear',
          loop: true
        }
      },
      hoverRadius: 12,
    hoverBackgroundColor: 'yellow',
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x'
    },
    title: {
      display: true,
      text: "Clicks & Impressions",
    },
  },
  
};

const data = {
    type:"line",
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  //labels: utils.days({count:30}),
  datasets: [
    {
      label: "Clicks",
      data: [12,13,8,10,34,0,0,37,12,16,25,32,26,35,48,28,12, 33, 35, 41, 44, 25,10,15,18,22,19,27,0,20],
      fill: true,
      backgroundColor: "rgb(105,81,162,0.2)",
      borderColor: "rgb(105,81,162,1)",
      tension:0.4
    },
    {
      label: "Impressions",
      data: [22,3,18,15,24,10,10,7,0,10,15,22,36,25,24,18,22, 13, 25, 21, 24, 45,20,35,8,0,12,17,10,15],
      fill: true,
      backgroundColor: "rgb(244,171,51,0.2)",
      borderColor: "rgb(244,171,51,1)",
      tension:0.2
    },
  ],
};


const ClicksImp = () => {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    // <div className="container">
    <Line data={data} options={options} />
    // </div>
  );
};
export default ClicksImp;
