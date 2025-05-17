import React from 'react';
import Link from 'next/link';
import { LotteryBall } from '@/components/LotteryBall';
import { ResultsCard } from '@/components/ResultsCard';

// Temporary mock data - will be replaced with API data
const mockResults = {
  lunchtime: {
    drawTime: '12:49 PM',
    date: new Date().toLocaleDateString(),
    numbers: [3, 11, 24, 36, 42, 47],
    bonusBall: 19,
  },
  teatime: {
    drawTime: '5:49 PM',
    date: new Date().toLocaleDateString(),
    numbers: [7, 13, 28, 31, 39, 45],
    bonusBall: 22,
  },
} as const;

export default function Home(): React.JSX.Element {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="font-montserrat text-4xl font-extrabold text-lottery-dark md:text-5xl lg:text-6xl">
          UK49s Lottery Results
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get the latest results for Lunchtime and Teatime draws
        </p>
      </section>

      {/* Results Section */}
      <section className="grid gap-8 md:grid-cols-2">
        <ResultsCard
          title="Lunchtime Draw"
          drawTime={mockResults.lunchtime.drawTime}
          date={mockResults.lunchtime.date}
          numbers={mockResults.lunchtime.numbers}
          bonusBall={mockResults.lunchtime.bonusBall}
        />
        <ResultsCard
          title="Teatime Draw"
          drawTime={mockResults.teatime.drawTime}
          date={mockResults.teatime.date}
          numbers={mockResults.teatime.numbers}
          bonusBall={mockResults.teatime.bonusBall}
        />
      </section>

      {/* Quick Links */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/past"
          className="card group cursor-pointer"
        >
          <h3 className="font-montserrat text-xl font-bold text-lottery-dark">
            Past Results
          </h3>
          <p className="mt-2 text-gray-600">
            View results from previous draws
          </p>
        </Link>
        <Link
          href="/stats"
          className="card group cursor-pointer"
        >
          <h3 className="font-montserrat text-xl font-bold text-lottery-dark">
            Statistics
          </h3>
          <p className="mt-2 text-gray-600">
            Analyze number patterns and trends
          </p>
        </Link>
        <Link
          href="/about"
          className="card group cursor-pointer lg:col-span-1"
        >
          <h3 className="font-montserrat text-xl font-bold text-lottery-dark">
            How to Play
          </h3>
          <p className="mt-2 text-gray-600">
            Learn about UK49s lottery rules
          </p>
        </Link>
      </section>
    </div>
  );
} 