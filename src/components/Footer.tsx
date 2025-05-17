import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/past', label: 'Past Results' },
  { href: '/stats', label: 'Statistics' },
] as const;

const currentYear = new Date().getFullYear();

export function Footer(): React.JSX.Element {
  return (
    <footer className="mt-auto bg-lottery-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-montserrat text-xl font-bold text-lottery-gold">UK49s Results</h3>
            <p className="mt-2 text-sm text-gray-300">
              Your trusted source for UK49s lottery results
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-lg font-semibold text-lottery-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-montserrat text-lg font-semibold text-lottery-gold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {currentYear} UK49s Results. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 