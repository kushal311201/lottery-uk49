import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({
  title = 'Error',
  message,
  onRetry,
}: ErrorMessageProps): React.JSX.Element {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="flex items-center space-x-2">
        <FaExclamationCircle className="text-lottery-red" size={20} />
        <h3 className="font-semibold text-lottery-red">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded-lg bg-lottery-red px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
} 