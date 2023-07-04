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
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
      indexAxis:'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
    title: {
      display: true,
      text: "Country Stats",
    },
  },
};

const labels = ["UK", "BE", "DK","IT","GE"];

export const data = {
  labels,
  datasets: [

    {
        label: "Net Gaming Revenue",
        data: [145, 120, 158, 179, 175],
        backgroundColor: "rgb(105,81,162)",
        border: 1,
      },
      {
        label: "Qualified Players",
        data: [95, 75, 125, 82, 100],
        backgroundColor: "rgb(244,171,51)",
        border: 1,
      },
      {
        label: "Registrations",
        data: [142, 122, 125, 90, 110],
        backgroundColor: "rgb(116, 179, 77)",
        border: 1,
      },
   
  
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function VerticalBar() {
  return <Bar options={options} data={data} />;
}
