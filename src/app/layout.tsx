import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://glinweb.com'),
  title:
    'GETYSTORE BLOGGING APP - WEBANDESIGNS | GLINCKER | G-NETWORK | GDS K S | GDSKS',
  description:
    'The Opensource Blogging Application for user to create their own blog and share their knowledge to the world.',
  applicationName: 'Getystore Blogging Application',
  keywords: 'Glinweb, GDSKS, WEBANDESIGNS, GDS K S, GLINCKER, CSS Framework',
  robots: 'all',
  appleWebApp: {
    title: 'Gettystore Blogging Application',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/favicon/favicon.ico',
      {
        url: '/favicon/favicon.ico',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  icons: {
    icon: [
      // Favicon
      {
        url: '/favicon/favicon.ico',
        rel: 'icon',
        href: '/favicon/favicon.ico',
      },
      // Apple Favicon
      {
        url: '/favicon/apple-touch-icon.png',
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      // 32 Favicon
      {
        url: '/favicon/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      // 16 Favicon
      {
        url: '/favicon/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      // mask-icon
      {
        url: '/favicon/safari-pinned-tab.svg',
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    images: [
      {
        url: 'https://cdn.glincker.com/glinweb/Glinweb.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: 'https://glinweb.com',
    title: 'GETYSTORE BLOGGING Applicaion | GLINCKER | GDS K S',
    description:
      'The Opensource Blogging Application for user to create their own blog and share their knowledge to the world.',
    siteName: 'Glinweb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
