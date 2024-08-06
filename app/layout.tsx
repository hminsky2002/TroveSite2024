import './globals.css';
import Head from 'next/head';
import { Pixelify_Sans, Inconsolata } from 'next/font/google';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trove',
  description:
    'Trove Theater Company is a New York City-based theatre and live arts collective. We create radical, delightful, and really good art with and for the people we love.',
  keywords:
    'Trove, Theater, Trove Theater Company, New York, Live Arts, Collective, Community',
};

const pixelfy = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelfy-sans',
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelfy.variable} ${inconsolata.variable}`}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        <Logo />

        <div className="children mx-8">{children}</div>
        <footer className="footer mt-8 text-center text-sm">
          <div>
            <p>contact us!</p>
            <a href="mailto:trovetransmissions@gmail.com" className="hover:text-blue-400 transition-colors">
              trovetransmissions@gmail.com
            </a>
          </div>
          <div>
            <p>Website spawned by</p>{' '}
            <Link
              href="https://harryminsky.com"
              className="inconsolata hover:text-blue-400"
            >
              Harry Minsky
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
export const revalidate = 60;
