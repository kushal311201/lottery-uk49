import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaHistory, FaChartBar, FaInfoCircle } from 'react-icons/fa';
import { clsx } from 'clsx';

const navItems = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/past', label: 'Past Results', icon: FaHistory },
  { href: '/stats', label: 'Statistics', icon: FaChartBar },
  { href: '/about', label: 'About', icon: FaInfoCircle },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-lottery-red font-montserrat">UK49s</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'nav-link flex items-center space-x-1',
                  pathname === href && 'text-lottery-red after:w-full'
                )}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-lottery-dark hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 