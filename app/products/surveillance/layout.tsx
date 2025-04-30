import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fusion Apps",
  description: "AI Solutions with Fusion Engine",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/img/Logo svg2.svg',
        type: 'img/svg+xml',
      },
      {
        rel: 'icon',
        url: '/img/Logo svg2.svg',
        sizes: '32x32',
      },
    ],
    shortcut: '/img/Logo svg2.svg',
    apple: '/img/Logo svg2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Fusion Apps | Fusion Surveillance | India's premier AI-powered security solution</title>
        <link rel="icon" type="image/svg+xml" href="/img/Logo svg2.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/img/Logo svg2.svg" />
        <link rel="apple-touch-icon" href="/img/Logo svg2.svg" />
        <meta property="og:title" content="Fusion Apps | Fusion Surveillance | India's premier AI-powered security solution"/>
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
