import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: '--font-naskh',
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prime',
  description: 'E-Commerce Solutions Co.',
  keywords: ['e-commerce marketing', 'online stores', 'Prime', 'E-Commerce Solutions', 'solutions','marketing agency', 'digital marketing', 'web development', 'SEO', 'social media management'],
  authors: [{ name: 'Prime Team' }],
  creator: 'Prime',
  metadataBase: new URL('http://www.prime-agency.org/'),
  openGraph: {
    title: 'Prime',
    description: 'E-Commerce Solutions Co.',
    url: 'http://www.prime-agency.org/',
    siteName: 'Prime',
    images: [
      {
        url: '/src/images/logo/gold.png', // public/src/images/logo/gold.png
        width: 1200,
        height: 630,
        alt: 'Prime E-Commerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime',
    description: 'E-Commerce Solutions Co.',
    images: ['/src/images/logo/gold.png'],
    creator: '@prime',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${notoNaskhArabic.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
