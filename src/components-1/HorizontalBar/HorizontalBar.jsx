import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: true,
      text: "Your Top 5 Brands By Registration",
    },
  },
};

const labels = ["Bwin", "Betmgm", "Ladbrokes", "Coral", "Betroot"];

export const data = {
  labels,
  datasets: [
    {
      label: "Brands",
      data: [777, 666, 555, 444, 222],
      backgroundColor: "rgb(105,81,162)",
      border: 0,
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function HorizontalBar() {
  return <Bar options={options} data={data} />;
}
