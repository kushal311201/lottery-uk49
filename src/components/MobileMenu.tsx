'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaHistory, FaChartBar, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { clsx } from 'clsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/past', label: 'Past Results', icon: FaHistory },
  { href: '/stats', label: 'Statistics', icon: FaChartBar },
  { href: '/about', label: 'About', icon: FaInfoCircle },
] as const;

export function MobileMenu({ isOpen, onClose }: MobileMenuProps): React.JSX.Element {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-xl"
          >
            <div className="flex h-16 items-center justify-between border-b px-4">
              <span className="text-lg font-bold text-lottery-dark">Menu</span>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className={clsx(
                        'flex items-center space-x-3 rounded-lg p-3 transition-colors',
                        pathname === href
                          ? 'bg-lottery-red text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      )}
                    >
                      <Icon size={20} />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 