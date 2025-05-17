import React from 'react';
import { clsx } from 'clsx';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
} as const;

export function LoadingSpinner({ size = 'md' }: LoadingSpinnerProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          'animate-spin rounded-full border-4 border-lottery-red border-t-transparent',
          sizeClasses[size]
        )}
      />
    </div>
  );
} 