import 'bootstrap/dist/css/bootstrap.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://glinweb.com'),
  title:
    'GETYSTORE BLOGGING APP - WEBANDESIGNS | GLINCKER | G-NETWORK | GDS K S | GDSKS',
  description:
    'The Opensource Blogging Application for user to create their own blog and share their knowledge.',
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
      {/* <
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      /> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />
    </html>
  );
}
