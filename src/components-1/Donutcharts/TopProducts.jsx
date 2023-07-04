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
      text: "Top Products by Registration",
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
  labels: ["Sportsbook", "Casino","Bingo","Poker"],
  datasets: [
    {
      data: [43, 35, 10,15],
      backgroundColor: ["rgb(105,81,162)", "rgb(116, 179, 77)", "#ff3333", "rgb(244,171,51)"],
      //   borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      //   borderWidth: 1,
    },
  ],
};

export function TopProducts() {
  return <Doughnut data={data} options={options} />;
}
