import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "CPA vs Revenve Share",
    },
  },
  
  //scales: {
  //   y: {
  //     ticks: {
  //       display: false,
  //     },
  //     grid: {
  //       display: false,
  //     },
  //     border: {
  //       display: false,
  //     },
  //   },
  //   x: {
  //     ticks: {
  //       display: false,
  //     },
  //     grid: {
  //       display: false,
  //     },
  //     border: {
  //       display: false,
  //     },
  //   },
  //},
};

export const data = {
  labels: ["Commission (CPA)", "Commission (Rev)"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgb(244,171,51)", "rgb(105,81,162)"],
      //   borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      //   borderWidth: 1,
    },
  ],
};

export function DonutCharts() {
  return <Doughnut data={data} options={options} />;
}
