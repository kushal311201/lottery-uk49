'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Temporary mock data - will be replaced with API data
const numberFrequency = Array.from({ length: 49 }, (_, i) => ({
  number: i + 1,
  frequency: Math.floor(Math.random() * 50) + 10,
}));

const chartData = {
  labels: numberFrequency.map((item) => item.number.toString()),
  datasets: [
    {
      label: 'Number Frequency',
      data: numberFrequency.map((item) => item.frequency),
      backgroundColor: '#b91c1c',
      borderColor: '#991b1b',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Number Frequency Analysis',
      font: {
        size: 16,
        weight: 'bold' as const,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Frequency',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Number',
      },
    },
  },
};

export default function Statistics(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-montserrat text-3xl font-bold text-lottery-dark md:text-4xl">
          Statistics & Analysis
        </h1>
        <p className="mt-2 text-gray-600">
          Analyze patterns and trends in UK49s lottery numbers
        </p>
      </div>

      {/* Number Frequency Chart */}
      <div className="card">
        <h2 className="mb-4 font-montserrat text-xl font-bold text-lottery-dark">
          Number Frequency
        </h2>
        <div className="h-[400px] w-full">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Hot and Cold Numbers */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 font-montserrat text-xl font-bold text-lottery-dark">
            Hot Numbers
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {numberFrequency
              .sort((a, b) => b.frequency - a.frequency)
              .slice(0, 10)
              .map(({ number, frequency }) => (
                <div
                  key={number}
                  className="flex flex-col items-center rounded-lg bg-red-50 p-2"
                >
                  <span className="text-lg font-bold text-lottery-red">{number}</span>
                  <span className="text-sm text-gray-600">{frequency}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4 font-montserrat text-xl font-bold text-lottery-dark">
            Cold Numbers
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {numberFrequency
              .sort((a, b) => a.frequency - b.frequency)
              .slice(0, 10)
              .map(({ number, frequency }) => (
                <div
                  key={number}
                  className="flex flex-col items-center rounded-lg bg-blue-50 p-2"
                >
                  <span className="text-lg font-bold text-blue-600">{number}</span>
                  <span className="text-sm text-gray-600">{frequency}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 