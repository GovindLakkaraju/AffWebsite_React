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
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],

  datasets: [
    {
      backgroundColor: "rgb(141, 111, 209, 0.2)",
      borderColor: "rgb(141, 111, 209, 1)",
      fill: true,
      data: [903, 1561, 999, 2000],
    },
  ],
};

const LineChart = () => {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return (
    // <div className="container">
    <Line data={data} options={options} />
    // </div>
  );
};
export default LineChart;
