import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thoughtshredder.com';
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ThoughtShredder — Destroy Bad Thoughts',
    template: '%s | ThoughtShredder',
  },
  description:
    'Destroy your bad thoughts, frustrations, and negative energy. Type it, upload it, and watch it vanish. A symbolic digital release ritual. Nothing is saved.',
  keywords: [
    'destroy bad thoughts',
    'let go of frustration',
    'release negative thoughts',
    'burn bad thoughts',
    'shred your anger',
    'flush away stress',
    'destroy negative energy online',
    'symbolic release tool',
    'digital letting go ritual',
  ],
  authors: [{ name: 'ThoughtShredder' }],
  creator: 'ThoughtShredder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ThoughtShredder',
    title: 'ThoughtShredder — Destroy Bad Thoughts',
    description:
      'Type your frustration, shred it, burn it, or flush it. A calming digital ritual for letting go. Nothing is saved.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ThoughtShredder — Destroy Bad Thoughts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThoughtShredder — Destroy Bad Thoughts',
    description: 'A symbolic release tool. Shred it, burn it, flush it. Nothing is saved.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ThoughtShredder',
    url: siteUrl,
    description: 'A symbolic tool to destroy bad thoughts, frustrations, and negative energy.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
