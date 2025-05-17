import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Temporary mock data - will be replaced with API data
const pastResults = [
  {
    id: 1,
    date: '2024-02-14',
    type: 'lunchtime',
    drawTime: '12:49 PM',
    numbers: [3, 11, 24, 36, 42, 47],
    bonusBall: 19,
  },
  {
    id: 2,
    date: '2024-02-14',
    type: 'teatime',
    drawTime: '5:49 PM',
    numbers: [7, 13, 28, 31, 39, 45],
    bonusBall: 22,
  },
  // Add more mock results here
] as const;

export default function PastResults(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-montserrat text-3xl font-bold text-lottery-dark md:text-4xl">
          Past Results
        </h1>
        <p className="mt-2 text-gray-600">
          View previous UK49s lottery draw results
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-lottery-gold bg-lottery-dark text-white">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Draw</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Numbers</th>
              <th className="px-4 py-3 text-left">Bonus</th>
            </tr>
          </thead>
          <tbody>
            {pastResults.map((result) => (
              <tr
                key={result.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">{result.date}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-1">
                    {result.type === 'lunchtime' ? (
                      <FaSun className="text-yellow-500" size={16} />
                    ) : (
                      <FaMoon className="text-blue-500" size={16} />
                    )}
                    <span className="capitalize">{result.type}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{result.drawTime}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {result.numbers.map((number) => (
                      <span
                        key={number}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lottery-red text-sm font-semibold text-white"
                      >
                        {number}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lottery-gold text-sm font-semibold text-white">
                    {result.bonusBall}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - To be implemented */}
      <div className="flex justify-center space-x-2">
        <button className="btn-primary" disabled>
          Previous
        </button>
        <button className="btn-primary">Next</button>
      </div>
    </div>
  );
} 