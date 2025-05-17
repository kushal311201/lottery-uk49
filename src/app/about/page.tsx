import React from 'react';
import { FaClock, FaPoundSign, FaCheck, FaInfoCircle } from 'react-icons/fa';

const drawTimes = [
  { type: 'Lunchtime', time: '12:49 PM GMT' },
  { type: 'Teatime', time: '5:49 PM GMT' },
] as const;

const howToPlay = [
  'Choose between 1 and 6 numbers from 1 to 49',
  'Decide if you want to play the bonus ball',
  'Select your stake amount',
  'Choose which draw you want to enter (Lunchtime, Teatime, or both)',
  'Get your ticket and wait for the results',
] as const;

export default function About(): React.JSX.Element {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="font-montserrat text-3xl font-bold text-lottery-dark md:text-4xl">
          About UK49s Lottery
        </h1>
        <p className="mt-2 text-gray-600">
          Learn everything you need to know about playing UK49s
        </p>
      </div>

      {/* Draw Times */}
      <section className="card">
        <h2 className="mb-4 flex items-center space-x-2 font-montserrat text-2xl font-bold text-lottery-dark">
          <FaClock size={24} className="text-lottery-red" />
          <span>Draw Times</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {drawTimes.map(({ type, time }) => (
            <div
              key={type}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h3 className="font-montserrat text-lg font-semibold text-lottery-dark">
                {type} Draw
              </h3>
              <p className="mt-2 text-gray-600">{time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Play */}
      <section className="card">
        <h2 className="mb-4 flex items-center space-x-2 font-montserrat text-2xl font-bold text-lottery-dark">
          <FaInfoCircle size={24} className="text-lottery-red" />
          <span>How to Play</span>
        </h2>
        <div className="space-y-4">
          {howToPlay.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 rounded-lg border border-gray-100 bg-white p-4"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lottery-red text-white">
                <FaCheck size={12} />
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prizes */}
      <section className="card">
        <h2 className="mb-4 flex items-center space-x-2 font-montserrat text-2xl font-bold text-lottery-dark">
          <FaPoundSign size={24} className="text-lottery-red" />
          <span>Prizes</span>
        </h2>
        <div className="prose max-w-none text-gray-600">
          <p>
            The UK49s lottery offers flexible betting options. Your prize depends on:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>How many numbers you choose to play (1-6)</li>
            <li>Whether you play the bonus ball</li>
            <li>Your stake amount</li>
            <li>The odds for your chosen numbers</li>
          </ul>
          <p className="mt-4">
            Contact your local betting shop or online betting provider for specific
            odds and potential winnings.
          </p>
        </div>
      </section>
    </div>
  );
} 