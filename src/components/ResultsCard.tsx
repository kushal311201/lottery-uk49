import React from 'react';
import { LotteryBall } from './LotteryBall';
import { FaClock, FaCalendar } from 'react-icons/fa';

interface ResultsCardProps {
  title: string;
  drawTime: string;
  date: string;
  numbers: readonly number[];
  bonusBall: number;
}

export function ResultsCard({
  title,
  drawTime,
  date,
  numbers,
  bonusBall,
}: ResultsCardProps): React.JSX.Element {
  return (
    <div className="card">
      <h2 className="font-montserrat text-2xl font-bold text-lottery-dark">
        {title}
      </h2>
      
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <FaClock size={16} />
          <span>{drawTime}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaCalendar size={16} />
          <span>{date}</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-gray-600">Winning Numbers:</p>
        <div className="mt-2 flex flex-wrap gap-4">
          {numbers.map((number) => (
            <LotteryBall key={number} number={number} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-gray-600">Bonus Ball:</p>
        <div className="mt-2">
          <LotteryBall number={bonusBall} isBonus />
        </div>
      </div>
    </div>
  );
} 