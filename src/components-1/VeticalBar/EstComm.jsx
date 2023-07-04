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
      text: "Estimated Commision Day-wise",
    },
  },
};

const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

export const data = {
  labels,
  datasets: [

    {
        label: "CPA",
        data: [120,153,80,1000,344,250,500,-337,-120,160,325,232,326,435,248,218,312, 433, 535, 241, 744, -325,410,715,718,-622,319,327,100,220],
        fill: true,
        backgroundColor: "rgb(244,171,51)",
        borderColor: "rgb(244,171,51)"
      },
      {
        label: "Revenue Share",
        data: [422,302,-318,150,254,120,190,277,100,-110,150,322,436,525,324,418,822, 213, -325, -321, -424, 345,420,935,878,260,512,417,510,-415],
        fill: true,
        backgroundColor: "rgb(105,81,162)",
        borderColor: "rgb(105,81,162)"
      },
   
  
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function EstComm() {
  return <Bar options={options} data={data} />;
}
