'use client';

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { getLotteryResults, type LotteryResult } from '@/services/api';

export default function PastResults(): React.JSX.Element {
  const [results, setResults] = useState<LotteryResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    drawType: '',
  });

  const fetchResults = async () => {
    try {
      setIsLoading(true);
      const response = await getLotteryResults(
        page,
        10,
        filters.startDate || undefined,
        filters.endDate || undefined,
        filters.drawType as 'lunchtime' | 'teatime' | undefined
      );
      setResults(response.data);
      setTotalPages(Math.ceil(response.total / response.pageSize));
      setError(null);
    } catch (err) {
      setError('Failed to load lottery results. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [page, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (error) {
    return (
      <div className="mt-8">
        <ErrorMessage
          title="Failed to Load Results"
          message={error}
          onRetry={fetchResults}
        />
      </div>
    );
  }

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

      {/* Filters */}
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lottery-red focus:outline-none focus:ring-1 focus:ring-lottery-red"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lottery-red focus:outline-none focus:ring-1 focus:ring-lottery-red"
          />
        </div>
        <div>
          <label htmlFor="drawType" className="block text-sm font-medium text-gray-700">
            Draw Type
          </label>
          <select
            id="drawType"
            name="drawType"
            value={filters.drawType}
            onChange={handleFilterChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-lottery-red focus:outline-none focus:ring-1 focus:ring-lottery-red"
          >
            <option value="">All Draws</option>
            <option value="lunchtime">Lunchtime</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
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
                {results.map((result) => (
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

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="flex items-center space-x-1 rounded-lg bg-lottery-dark px-4 py-2 text-white transition-colors hover:bg-lottery-dark/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaChevronLeft size={12} />
              <span>Previous</span>
            </button>
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="flex items-center space-x-1 rounded-lg bg-lottery-dark px-4 py-2 text-white transition-colors hover:bg-lottery-dark/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>Next</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </>
      )}
    </div>
  );
} 