import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'UK49s Results | Latest Lottery Numbers',
    template: '%s | UK49s Results',
  },
  description: 'Get the latest UK49s lottery results, including lunchtime and teatime draws. View past results, statistics, and more.',
  keywords: ['UK49s', 'lottery', 'results', 'lunchtime draw', 'teatime draw', 'lottery numbers'],
  authors: [{ name: 'UK49s Results' }],
  creator: 'UK49s Results',
  publisher: 'UK49s Results',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://uk49s-results.vercel.app',
    siteName: 'UK49s Results',
    title: 'UK49s Results | Latest Lottery Numbers',
    description: 'Get the latest UK49s lottery results, including lunchtime and teatime draws. View past results, statistics, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UK49s Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK49s Results | Latest Lottery Numbers',
    description: 'Get the latest UK49s lottery results, including lunchtime and teatime draws. View past results, statistics, and more.',
    images: ['/og-image.jpg'],
  },
} as const;

export const getMetadata = (
  title?: string,
  description?: string
): Metadata => ({
  ...defaultMetadata,
  ...(title && { title }),
  ...(description && { description }),
  openGraph: {
    ...defaultMetadata.openGraph,
    ...(title && { title }),
    ...(description && { description }),
  },
  twitter: {
    ...defaultMetadata.twitter,
    ...(title && { title }),
    ...(description && { description }),
  },
}); 