import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { defaultMetadata } from './metadata';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col bg-gray-50">
        <Navbar />
        <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 