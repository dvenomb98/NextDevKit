import './globals.css';
import { Inter } from 'next/font/google';
import AppProviders from '@/providers/AppProviders';
import { Metadata } from 'next';
import siteMetadata from '../data/siteMetadata';
import { Viewport } from 'next/dist/lib/metadata/types/extra-types';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
